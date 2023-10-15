import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
     updatedAt: Date
}