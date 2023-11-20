import { Injectable } from '@nestjs/common';
import { Lab, LabDocument, LabSchema } from '../schemas/labs/lab.schema';
import { Model } from 'mongoose';
import { CreateLabDTO } from '../schemas/labs/createlabdto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LabsService {
  constructor(@InjectModel('Labs') private readonly labModel: Model<Lab>) {}

  async create(createLabDto: CreateLabDTO): Promise<LabDocument> {
    console.log(
      'in create, createLabDto is:\n' + JSON.stringify(createLabDto, null, 2),
    );
    const createdLab = new this.labModel(createLabDto);
    const res = await createdLab.save();
    console.log('in create, res is:\n' + res.toJSON());
    return res;
  }
}
