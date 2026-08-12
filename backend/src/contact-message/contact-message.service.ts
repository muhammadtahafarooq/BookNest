import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactMessageDto } from './dto/create-contact-message.dto';
import { UpdateContactMessageDto } from './dto/update-contact-message.dto';

@Injectable()
export class ContactMessageService {
  private readonly logger = new Logger(ContactMessageService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateContactMessageDto) {
    const record = await this.prisma.contactMessage.create({ data });
    this.logger.log(`New contact message received: ${record.id} (${record.email})`);
    return record;
  }

  async findAll(page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const take = Math.min(limit, 100);
    const [data, total] = await Promise.all([
      this.prisma.contactMessage.findMany({ skip, take }),
      this.prisma.contactMessage.count(),
    ]);
    return { data, meta: { total, page, limit: take, totalPages: Math.ceil(total / take) } };
  }

  async findOne(id: string) {
    const record = await this.prisma.contactMessage.findUnique({ where: { id } });
    if (!record) throw new NotFoundException('ContactMessage not found');
    return record;
  }

  async update(id: string, data: UpdateContactMessageDto) {
    await this.findOne(id);
    return this.prisma.contactMessage.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.contactMessage.delete({ where: { id } });
    return { message: 'ContactMessage deleted successfully' };
  }
}
