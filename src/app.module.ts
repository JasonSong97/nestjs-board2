import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { LoggingMiddleware } from './middleware/logging.middleware';
import ConfigModule from './config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // 상단: 1번만 호출, 특정한 경우
    ConfigModule(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'fastcampus',
      password: 'fastcampus',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity.{.ts,.js}'], // build 시 js로 변경
      synchronize: false, // entity 변경시 DB에 반영?
    }),

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
