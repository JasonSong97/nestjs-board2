import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { User } from 'src/entity/user.entity';
import { Board } from 'src/entity/board.entity';

@Module({
     imports: [TypeOrmModule.forFeature([Board, User])],
     //* 컨트롤러를 먼저 생성해서 명시 필요
     controllers: [BoardController], 
     providers: [BoardService]
}) // 모듈과 컨트롤러 생성 순서 차이
export class BoardModule {}
