import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) : number {
    console.log(`Using 10 watts of electricity power!`)
    this.powerService.supplyPower(10);
    return a + b;
  }
}
