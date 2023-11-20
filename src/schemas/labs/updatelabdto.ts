import { PartialType } from '@nestjs/mapped-types';
import { CreateLabDTO } from './createlabdto';
export class UpdateStudentDto extends PartialType(CreateLabDTO) {}
