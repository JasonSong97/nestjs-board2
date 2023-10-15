import { Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

export class LoggingMiddleware implements NestMiddleware { // app.module,ts 등록

     private readonly logger = new Logger();

     // API 종료 시점, method 주소 응답 상태값 소요시간 필요
     use(req: Request, res: Response, next: NextFunction) {
          const { method, originalUrl } = req;
          const startTime = Date.now();

          
          res.on('finish', () => { // event
               const { statusCode } = res;
               const responseTime = Date.now() - startTime;

               this.logger.log(`[${method}]${originalUrl}:${statusCode} - ${responseTime}ms`);
          });

          next();
     }

}