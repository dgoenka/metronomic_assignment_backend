import { Module } from '@nestjs/common';
import { LabsController } from './labs.controller';
import { LabsService } from './labs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LabSchema } from '../schemas/labs/lab.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Labs', schema: LabSchema }])],
  controllers: [LabsController],
  providers: [LabsService],
})
export class LabsModule {}
