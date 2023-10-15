import { Controller, Get, Query, HttpStatus, HttpException, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService,
              private readonly configService: ConfigService) {}
  // implements LoggerService -> LoggerService interface -> DI X 직접 생성 필요
  // private readonly logger = new Logger(AppController.name); // 위치

  @Get()
  getHello(@Ip() ip: string): string {

    // test
    // this.logger.log(ip);
    // this.logger.debug(ip);
    // this.logger.error(ip);
    // this.logger.verbose(ip);
    // this.logger.warn(ip);

    // 환경설정 불러오기
    console.log(this.configService.get<string>('ENVIRONMENT'));

    return this.appService.getHello();
  }

  @Get('name')
  getName(@Query('name') name: string): string {
    return `${name} hello`;
  }
}
