import { Body, Controller, Post } from '@nestjs/common';
import { LabsService } from './labs.service';
import { CreateLabDTO } from '../schemas/labs/createlabdto';

@Controller('labs')
export class LabsController {
  constructor(private readonly labService: LabsService) {}

  @Post('/add')
  add(@Body() lab: CreateLabDTO) {
    return this.labService.create(lab);
  }
}
