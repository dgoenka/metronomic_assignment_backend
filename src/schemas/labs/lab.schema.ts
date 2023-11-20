import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LabDocument = HydratedDocument<Lab>;

@Schema({ collection: 'labs' })
export class Lab {
  @Prop()
  labName: string;

  @Prop()
  providerGroup: string;

  @Prop()
  providerUnit: string;

  @Prop()
  address: string;

  @Prop()
  state: string;

  @Prop()
  city: string;

  @Prop()
  zipCode: string;

  @Prop()
  mobileNumber: string;

  @Prop()
  officePhone: string;

  @Prop()
  mobile: string;

  @Prop()
  email: string;

  @Prop()
  timezone: string;
}

export const LabSchema = SchemaFactory.createForClass(Lab);
