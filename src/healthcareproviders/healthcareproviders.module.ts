import { Module } from '@nestjs/common';
import { HealthcareprovidersController } from './healthcareproviders.controller';

@Module({
  controllers: [HealthcareprovidersController]
})
export class HealthcareprovidersModule {}
