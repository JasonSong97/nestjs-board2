import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({ name: 'board' })
export class Board {
     
     @PrimaryGeneratedColumn({ name: 'id' })
     id: number;

     @Column()
     @ApiProperty({ description: 'user_id'})
     userId: number;

     @Column()
     @ApiProperty({ description: '내용'})
     content: string;

     @UpdateDateColumn()
     @ApiProperty({ description: '생성일'})
     createdAt: Date;

     @UpdateDateColumn()
     @ApiProperty({ description: '수정일'})
     updatedAt: Date;

     @ApiProperty({ description: '유저 정보'})
     @ManyToOne(() => User) // user_id
     @JoinColumn({ name: 'userId' })
     user: User;
}