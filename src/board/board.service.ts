import { Injectable } from '@nestjs/common';

@Injectable() //*
export class BoardService {

     private boards = [
          {
               id: '1',
               title: 'aaaa',
               content: 'Content 1'
          },
          {
               id: '2',
               title: 'bbbb',
               content: 'Content 2'
          },
          {
               id: '3',
               title: 'cccc',
               content: 'Content 3'
          },
          {
               id: '4',
               title: 'dddd',
               content: 'Content 4'
          },
          {
               id: '5',
               title: 'eeee',
               content: 'Content 5'
          },
          {
               id: '6',
               title: 'ffff',
               content: 'Content 6'
          },
          {
               id: '7',
               title: 'gggg',
               content: 'Content 7'
          },
          {
               id: '8',
               title: 'hhhh',
               content: 'Content 8'
          },
          {
               id: '9',
               title: 'iiii',
               content: 'Content 9'
          },
          {
               id: '10',
               title: 'jjjj',
               content: 'Content 10'
          },
     ];

     findAll() {
          return this.boards;
     }

     find(id: string) {
          const index = this.boards.findIndex((board) => board.id === id);
          return this.boards[index];
     }
}
