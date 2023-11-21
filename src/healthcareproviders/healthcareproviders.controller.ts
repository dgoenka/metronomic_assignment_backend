import { Controller, Get } from '@nestjs/common';

@Controller('healthcareproviders')
export class HealthcareprovidersController {
  @Get('listProviderGroup')
  listProviderGroup(): String[] {
    return [
      'A1',
      'A2',
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'A8',
      'A9',
      'A10',
      'A11',
      'A12',
      'A13',
      'A14',
      'A15',
      'A16',
      'A17',
      'A18',
      'A19',
      'A20',
    ];
  }
  @Get('listProviderUnit')
  listProviderUnit() {
    return [
      'B1',
      'B2',
      'B3',
      'B4',
      'B5',
      'B6',
      'B7',
      'B8',
      'B9',
      'B10',
      'B11',
      'B12',
      'B13',
      'B14',
      'B15',
      'B16',
      'B17',
      'B18',
      'B19',
      'B20',
    ];
  }
}