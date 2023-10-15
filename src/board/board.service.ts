import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable() //*
export class BoardService {

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

     findAll() {
          const nextId = this.getNextId();
          console.log(nextId);
          return this.boards;
     }

     find(id: number) {
          const index = this.boards.findIndex((board) => board.id === id);
          return this.boards[index];
     }

     create(data: CreateBoardDto) {
          const newBoard = { id: this.getNextId(), ...data };
          this.boards.push(newBoard);
          return newBoard;
     }

     update(id: number, data: UpdateBoardDto) {
          const index = this.getBoardId(id);
          if (index > -1) {
               this.boards[index] = {
                    // seperate 문법: 덮어씌우기(기존데이터 유지하면서)
                    ...this.boards[index],
                    ...data,
               };
               return this.boards[index];
          }
          return null;
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
