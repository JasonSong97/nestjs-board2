import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Board } from './board.entity';

@Entity()
export class User {

     @PrimaryGeneratedColumn() // @PrimaryGeneratedColumn: 자동 증가
     id: number;

     @Column({ unique: true })
     @ApiProperty({ description: '유저아이디', example: 'admin' })
     username: string;

     @Column({ select: false })
     @ApiProperty({ description: '비밀번호'})
     password: string;

     @Column()
     @ApiProperty({ description: '이름'})
     name: string;

     @ApiProperty({ description: '작성한 게시글'})
     @OneToMany(() => Board, (board) => board.user)
     boards: Board[]
}