import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response, Request } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter { 
     
     // main.ts에 등록 필요
     catch(exception: HttpException, host: ArgumentsHost) {
          const ctx = host.switchToHttp();
          const response = ctx.getResponse<Response>();
          const status = exception.getStatus();
          const request = ctx.getRequest<Request>();

          // return 에러코드, 시간, 경로
          response.status(status).json({
               statusCode: status,
               timestamp: new Date().toISOString(),
               path: request.url
          });
     } 
}