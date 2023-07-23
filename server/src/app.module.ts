// src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppGateway } from './app.gateway';
import { AppService } from './app.service';
import googleCloudConfig from './google-cloud.config';

@Module({
  imports: [ConfigModule.forRoot({
    load: [googleCloudConfig]
  })],
  providers: [AppGateway, AppService],
})
export class AppModule {}
