import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {

  constructor(private cpuServices: CpuService, private diskService: DiskService) {}

  @Get()
  run(){
    return [
      this.cpuServices.compute(10, 110),
      this.diskService.getData()
    ]
  }
}
