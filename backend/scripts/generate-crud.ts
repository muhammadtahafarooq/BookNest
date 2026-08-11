// scripts/generate-crud.ts
// Run with: npx ts-node scripts/generate-crud.ts
import * as fs from 'fs';
import * as path from 'path';

// ─── Config ─────────────────────────────────────────────────────────────────
const schemaPath = path.resolve('prisma/schema.prisma');
const schema = fs.readFileSync(schemaPath, 'utf-8');
const srcRoot = path.resolve('src');

// ─── Helpers ────────────────────────────────────────────────────────────────
const PRISMA_SCALARS = new Set([
  'String', 'Int', 'Float', 'Decimal', 'Boolean', 'DateTime', 'Json', 'Bytes', 'BigInt',
]);

function toKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function pluralKebab(str: string): string {
  const k = toKebab(str);
  if (k.endsWith('s')) return k + 'es';
  if (k.endsWith('y') && !k.endsWith('ay') && !k.endsWith('ey') && !k.endsWith('oy') && !k.endsWith('uy'))
    return k.slice(0, -1) + 'ies';
  return k + 's';
}

function prismaTypeToTs(prismaType: string): string {
  switch (prismaType) {
    case 'String': return 'string';
    case 'Int': case 'Float': case 'BigInt': return 'number';
    case 'Decimal': return 'number';
    case 'Boolean': return 'boolean';
    case 'DateTime': return 'Date';
    case 'Json': return 'any';
    case 'Bytes': return 'Buffer';
    default: return 'string'; // enums are treated as strings
  }
}

interface ParsedField {
  name: string;
  prismaType: string;
  tsType: string;
  isOptional: boolean;
  hasDefault: boolean;
  isRelation: boolean;
  isArray: boolean;
  isId: boolean;
  isUpdatedAt: boolean;
  isCreatedAt: boolean;
  isEnum: boolean;
  rawLine: string;
}

// Collect all model names first (to identify relation types)
const modelNames = new Set<string>();
const modelNameRegex = /^model\s+(\w+)\s*{/gm;
let m: RegExpExecArray | null;
while ((m = modelNameRegex.exec(schema)) !== null) {
  modelNames.add(m[1]);
}

// Collect all enum names
const enumNames = new Set<string>();
const enumNameRegex = /^enum\s+(\w+)\s*{/gm;
while ((m = enumNameRegex.exec(schema)) !== null) {
  enumNames.add(m[1]);
}

function parseField(line: string): ParsedField | null {
  const trimmed = line.trim();
  // Skip empty lines, comments, and @@-level attributes
  if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('@@')) return null;

  // Match: fieldName  Type?  @modifiers...
  const fieldMatch = trimmed.match(/^(\w+)\s+(\w+)(\[\])?\??(.*)$/);
  if (!fieldMatch) return null;

  const name = fieldMatch[1];
  const rawType = fieldMatch[2];
  const isArray = !!fieldMatch[3];
  const rest = fieldMatch[4] || '';
  const isOptional = trimmed.includes(rawType + '?') || trimmed.includes('[]?');
  const hasDefault = rest.includes('@default');
  const isId = rest.includes('@id');
  const isUpdatedAt = rest.includes('@updatedAt');
  const isCreatedAt = name === 'createdAt';
  const isRelation = modelNames.has(rawType);
  const isEnum = enumNames.has(rawType);

  return {
    name,
    prismaType: rawType,
    tsType: isEnum ? rawType : prismaTypeToTs(rawType),
    isEnum,
    isOptional,
    hasDefault,
    isRelation,
    isArray,
    isId,
    isUpdatedAt,
    isCreatedAt,
    rawLine: trimmed,
  };
}

// ─── Ensure directories ─────────────────────────────────────────────────────
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir(srcRoot);

// ─── Generate PrismaModule ──────────────────────────────────────────────────
const prismaDir = path.join(srcRoot, 'prisma');
ensureDir(prismaDir);

fs.writeFileSync(path.join(prismaDir, 'prisma.service.ts'),
`import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
`);

fs.writeFileSync(path.join(prismaDir, 'prisma.module.ts'),
`import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
`);

// ─── Shared pagination DTO ──────────────────────────────────────────────────
const commonDir = path.join(srcRoot, 'common', 'dto');
ensureDir(commonDir);

fs.writeFileSync(path.join(commonDir, 'pagination.dto.ts'),
`import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min, Max } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number = 20;
}
`);

// ─── Parse models and generate CRUD ─────────────────────────────────────────
const modelRegex = /model\s+(\w+)\s*{([\s\S]*?)}/g;
const generatedModules: { name: string; kebab: string }[] = [];

while ((m = modelRegex.exec(schema)) !== null) {
  const modelName = m[1];
  const fieldsBlock = m[2];
  const lines = fieldsBlock.split('\n');

  const allFields: ParsedField[] = [];
  for (const line of lines) {
    const parsed = parseField(line);
    if (parsed) allFields.push(parsed);
  }

  // Only scalar (non-relation, non-array) fields
  const scalarFields = allFields.filter(f => !f.isRelation && !f.isArray);

  // Fields suitable for Create DTO: skip id, createdAt, updatedAt
  const createFields = scalarFields.filter(f => !f.isId && !f.isUpdatedAt && !f.isCreatedAt);

  // Fields for response DTO: all scalar fields, but exclude password
  const responseFields = scalarFields;

  const modelKebab = toKebab(modelName);
  const modelCamel = toCamelCase(modelName);
  const routeName = pluralKebab(modelName);

  const modelDir = path.join(srcRoot, modelKebab);
  const dtoDir = path.join(modelDir, 'dto');
  ensureDir(dtoDir);

  generatedModules.push({ name: modelName, kebab: modelKebab });

  // ── Create DTO ──────────────────────────────────────────────────────────
  const createDtoImports = new Set<string>();
  const createDtoLines: string[] = [];
  const enumImports = new Set<string>();

  for (const f of createFields) {
    const decorators: string[] = [];
    const isFieldOptional = f.isOptional || f.hasDefault;

    if (isFieldOptional) {
      createDtoImports.add('IsOptional');
      decorators.push('  @IsOptional()');
    } else {
      createDtoImports.add('IsNotEmpty');
      decorators.push('  @IsNotEmpty()');
    }

    if (f.isEnum) {
      createDtoImports.add('IsEnum');
      enumImports.add(f.prismaType);
      decorators.push(`  @IsEnum(${f.prismaType})`);
    } else if (f.prismaType === 'String') {
      createDtoImports.add('IsString');
      decorators.push('  @IsString()');
    }
    if (f.prismaType === 'Int' || f.prismaType === 'Float' || f.prismaType === 'BigInt') {
      createDtoImports.add('IsNumber');
      decorators.push('  @IsNumber()');
    }
    if (f.prismaType === 'Decimal') {
      createDtoImports.add('IsNumber');
      decorators.push('  @IsNumber()');
    }
    if (f.prismaType === 'Boolean') {
      createDtoImports.add('IsBoolean');
      decorators.push('  @IsBoolean()');
    }
    if (f.prismaType === 'DateTime') {
      createDtoImports.add('IsDateString');
      decorators.push('  @IsDateString()');
    }
    if (f.name === 'email') {
      createDtoImports.add('IsEmail');
      decorators.push('  @IsEmail()');
    }
    if (f.name === 'password') {
      createDtoImports.add('MinLength');
      decorators.push('  @MinLength(8)');
    }

    const opt = isFieldOptional ? '?' : '';
    createDtoLines.push(`${decorators.join('\n')}\n  ${f.name}${opt}: ${f.tsType};`);
  }

  const enumImportLine = enumImports.size > 0
    ? `import { ${[...enumImports].sort().join(', ')} } from '@prisma/client';\n`
    : '';

  const createDtoContent =
`import { ${[...createDtoImports].sort().join(', ')} } from 'class-validator';
${enumImportLine}
export class Create${modelName}Dto {
${createDtoLines.join('\n\n')}
}
`;
  fs.writeFileSync(path.join(dtoDir, `create-${modelKebab}.dto.ts`), createDtoContent);

  // ── Update DTO ──────────────────────────────────────────────────────────
  const updateDtoContent =
`import { PartialType } from '@nestjs/mapped-types';
import { Create${modelName}Dto } from './create-${modelKebab}.dto';

export class Update${modelName}Dto extends PartialType(Create${modelName}Dto) {}
`;
  fs.writeFileSync(path.join(dtoDir, `update-${modelKebab}.dto.ts`), updateDtoContent);

  // ── Response DTO (exclude password) ─────────────────────────────────────
  const responseDtoLines = responseFields.map(f => {
    if (f.name === 'password') {
      return `  @Exclude()\n  ${f.name}: ${f.tsType};`;
    }
    return `  @Expose()\n  ${f.name}: ${f.tsType};`;
  });

  const responseEnumImports = responseFields.filter(f => f.isEnum).map(f => f.prismaType);
  const responseEnumImportLine = responseEnumImports.length > 0
    ? `import { ${[...new Set(responseEnumImports)].sort().join(', ')} } from '@prisma/client';\n`
    : '';

  const responseDtoContent =
`import { Exclude, Expose } from 'class-transformer';
${responseEnumImportLine}
export class ${modelName}ResponseDto {
${responseDtoLines.join('\n\n')}
}
`;
  fs.writeFileSync(path.join(dtoDir, `${modelKebab}-response.dto.ts`), responseDtoContent);

  // ── Service ─────────────────────────────────────────────────────────────
  // Build the select object to exclude password from queries
  const hasPassword = scalarFields.some(f => f.name === 'password');
  const selectClause = hasPassword
    ? `\n  private readonly selectFields = {\n${scalarFields.map(f => `    ${f.name}: ${f.name !== 'password'},`).join('\n')}\n  };\n`
    : '';
  const selectArg = hasPassword ? ', select: this.selectFields' : '';

  const serviceContent =
`import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Create${modelName}Dto } from './dto/create-${modelKebab}.dto';
import { Update${modelName}Dto } from './dto/update-${modelKebab}.dto';

@Injectable()
export class ${modelName}Service {
  constructor(private readonly prisma: PrismaService) {}
${selectClause}
  async create(data: Create${modelName}Dto) {
    return this.prisma.${modelCamel}.create({ data });
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.${modelCamel}.findMany({ skip, take${selectArg} }),
      this.prisma.${modelCamel}.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.${modelCamel}.findUnique({ where: { id }${selectArg} });
    if (!record) throw new NotFoundException('${modelName} not found');
    return record;
  }

  async update(id: string, data: Update${modelName}Dto) {
    await this.findOne(id);
    return this.prisma.${modelCamel}.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.${modelCamel}.delete({ where: { id } });
    return { message: '${modelName} deleted successfully' };
  }
}
`;
  fs.writeFileSync(path.join(modelDir, `${modelKebab}.service.ts`), serviceContent);

  // ── Controller ──────────────────────────────────────────────────────────
  const controllerContent =
`import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ${modelName}Service } from './${modelKebab}.service';
import { Create${modelName}Dto } from './dto/create-${modelKebab}.dto';
import { Update${modelName}Dto } from './dto/update-${modelKebab}.dto';
import { PaginationDto } from '../common/dto/pagination.dto';

@Controller('${routeName}')
export class ${modelName}Controller {
  constructor(private readonly ${modelCamel}Service: ${modelName}Service) {}

  @Post()
  create(@Body() dto: Create${modelName}Dto) {
    return this.${modelCamel}Service.create(dto);
  }

  @Get()
  findAll(@Query() pagination: PaginationDto) {
    return this.${modelCamel}Service.findAll(pagination.page, pagination.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${modelCamel}Service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: Update${modelName}Dto) {
    return this.${modelCamel}Service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${modelCamel}Service.remove(id);
  }
}
`;
  fs.writeFileSync(path.join(modelDir, `${modelKebab}.controller.ts`), controllerContent);

  // ── Module ──────────────────────────────────────────────────────────────
  const moduleContent =
`import { Module } from '@nestjs/common';
import { ${modelName}Service } from './${modelKebab}.service';
import { ${modelName}Controller } from './${modelKebab}.controller';

@Module({
  providers: [${modelName}Service],
  controllers: [${modelName}Controller],
  exports: [${modelName}Service],
})
export class ${modelName}Module {}
`;
  fs.writeFileSync(path.join(modelDir, `${modelKebab}.module.ts`), moduleContent);

  console.log(`  ✓ ${modelName} → src/${modelKebab}/`);
}

// ─── Update AppModule ───────────────────────────────────────────────────────
const appModulePath = path.join(srcRoot, 'app.module.ts');

const moduleImportLines = generatedModules.map(
  m => `import { ${m.name}Module } from './${m.kebab}/${m.kebab}.module';`
);

const moduleListEntries = generatedModules.map(m => `    ${m.name}Module,`).join('\n');

const appModuleContent =
`import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
${moduleImportLines.join('\n')}

@Module({
  imports: [
    PrismaModule,
${moduleListEntries}
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
`;

fs.writeFileSync(appModulePath, appModuleContent);
console.log(`  ✓ AppModule updated with ${generatedModules.length} modules`);
console.log('\\n✅ CRUD scaffolding generated successfully!');
