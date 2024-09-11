import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(): string {
    console.log(`Using 20 watts of electricity power!`);
    this.powerService.supplyPower(20);

    return 'data';
  }
}
