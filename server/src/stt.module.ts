// src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SttGateway } from './stt.gateway';
import { SttService } from './stt.service';
import googleCloudConfig from './google-cloud.config';
// 동윤
import { MongooseModule } from '@nestjs/mongoose';
import { STT, STTSchema } from 'src/forms/schema.schema';

@Module({
  imports: [
    // 동윤
    MongooseModule.forFeature([{name: STT.name, schema: STTSchema}]),
    MongooseModule.forRoot("mongodb+srv://ydg:1234@cluster0.n61crm6.mongodb.net/sttDB?retryWrites=true&w=majority"),
    ConfigModule.forRoot({
    load: [googleCloudConfig]
  })],
  providers: [SttGateway, SttService],
})
export class SttModule {}
