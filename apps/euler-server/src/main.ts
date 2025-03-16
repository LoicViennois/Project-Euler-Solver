import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:4200', process.env.EULER_CLIENT_URL],
  });
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
