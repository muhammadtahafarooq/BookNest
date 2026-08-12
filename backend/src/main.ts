import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

function validateEnv() {
  const missing = ['DATABASE_URL', 'JWT_SECRET'].filter(
    (key) => !process.env[key],
  );
  if (missing.length) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`,
    );
  }
  if ((process.env.JWT_SECRET ?? '').length < 32) {
    throw new Error(
      'JWT_SECRET must be a random string of at least 32 characters',
    );
  }
  if (process.env.NODE_ENV === 'production' && !process.env.FRONTEND_URL) {
    throw new Error('FRONTEND_URL must be set in production to restrict CORS');
  }
}

async function bootstrap() {
  validateEnv();
  const app = await NestFactory.create(AppModule);

  // Security Middlewares
  app.use(helmet());
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('BookNest API')
    .setDescription('The BookNest API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  if (
    process.env.NODE_ENV !== 'production' ||
    process.env.SWAGGER_ENABLED === 'true'
  ) {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `Application is running on: http://localhost:${process.env.PORT ?? 3000}`,
  );
}
bootstrap();
