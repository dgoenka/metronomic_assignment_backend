import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateLabDTO {
  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  labName: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  providerGroup: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  providerUnit: string;

  @IsString()
  @MaxLength(500)
  @IsNotEmpty()
  address: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  state: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  city: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  zipCode: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  mobileNumber: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  officePhone: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  mobile: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MaxLength(80)
  @IsNotEmpty()
  timezone: string;
}
