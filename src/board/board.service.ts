import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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

     private boards = [
          {
               id: 1,
               title: 'aaaa',
               content: 'Content 1'
          },
          {
               id: 2,
               title: 'bbbb',
               content: 'Content 2'
          },
          {
               id: 3,
               title: 'cccc',
               content: 'Content 3'
          },
          {
               id: 4,
               title: 'dddd',
               content: 'Content 4'
          },
          {
               id: 5,
               title: 'eeee',
               content: 'Content 5'
          },
          {
               id: 6,
               title: 'ffff',
               content: 'Content 6'
          },
          {
               id: 7,
               title: 'gggg',
               content: 'Content 7'
          },
          {
               id: 8,
               title: 'hhhh',
               content: 'Content 8'
          },
          {
               id: 9,
               title: 'iiii',
               content: 'Content 9'
          },
          {
               id: 10,
               title: 'jjjj',
               content: 'Content 10'
          },
     ];

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
          const board = await this.boardRepository.findOneBy({
               id
          });
          if (!board) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
          return this.boardRepository.update(id, {
            ...data
          });
     }

     delete(id: number) {
          const index = this.getBoardId(id);
          if (index > -1) {
               const deleteBoard = this.boards[index];
               this.boards.splice(index, 1);
               return deleteBoard;
          }
          return null;
     }

     getBoardId(id: number) {
          return this.boards.findIndex((board) => board.id === id);
     }

     getNextId() {
          return this.boards.sort((a, b) => (b.id - a.id))[0].id + 1;
     }
}
