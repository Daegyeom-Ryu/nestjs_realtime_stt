// src/main.ts

import { NestFactory } from '@nestjs/core';
import { SttModule } from './stt.module';

async function bootstrap() {
  const app = await NestFactory.create(SttModule);
  app.enableCors();
  await app.listen(8081, ()=>{
    console.log('Server Start');
  });
}
bootstrap();
