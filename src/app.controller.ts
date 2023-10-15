import { Controller, Get, Query, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}
  // implements LoggerService -> LoggerService interface -> DI X 직접 생성 필요
  // private readonly logger = new Logger(AppController.name); // 위치

  @Get()
  getHello(): string {

    // test
    // this.logger.log(ip);
    // this.logger.debug(ip);
    // this.logger.error(ip);
    // this.logger.verbose(ip);
    // this.logger.warn(ip);

    return this.appService.getHello();
  }

  @Get('name')
  getName(@Query('name') name: string): string {
    return `${name} hello`;
  }
}
