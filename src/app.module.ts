import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { LoggingMiddleware } from './middleware/logging.middleware';
import ConfigModule from './config';

@Module({
  imports: [
    // 상단: 1번만 호출, 특정한 경우
    ConfigModule(),

    // 하딘: 도메인 성격(계속추가되는 경우)
    BoardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggingMiddleware).forRoutes('*'); // 모든 곳에 적용
  }
}
