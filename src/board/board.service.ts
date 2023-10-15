import { Injectable, HttpException, HttpStatus, Param } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { Board } from 'src/entity/board.entity';

@Injectable() //*
export class BoardService {

     constructor(@InjectRepository(User) private userRepository: Repository<User>,
                 @InjectRepository(Board) private boardRepository: Repository<Board>) {}

     async findAll() {
          return this.boardRepository.find();
     }

     async find(id: number) {
          const board = await this.boardRepository.findOne({ // findOne(where 필요), findOneBy(Where X)
               where: {
                    id,
               },
               relations: {
                    user: true,
               },
          });
          if (!board) throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
          return board;
     }

     async create(data: CreateBoardDto) {
          return this.boardRepository.save(data); // create(인스턴스까지만 생성) save(DB까지 입력)
     }

     async update(id: number, data: UpdateBoardDto) {
          const board = await this.getBoardById(id);
          if (!board) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
          return this.boardRepository.update(id, {
            ...data
          });
     }

     async delete(id: number) {
          const board = await this.getBoardById(id);
          if (!board) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
          return this.boardRepository.remove(board);
     }

     /**
      * 모듈화
      */

     async getBoardById(id: number) {
          return this.boardRepository.findOneBy({
               id,
          });
     }
}
