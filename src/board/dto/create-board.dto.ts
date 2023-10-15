import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateBoardDto {
     
     @MinLength(2)
     @MaxLength(20)
     @IsNotEmpty()  
     @ApiProperty({
          // swagger
          description: '제목',
          required: true,
          example: '제목입니다'
     })
     title: string;

     @IsNotEmpty()
     @ApiProperty({
          // swagger
          description: '내용',
          required: true,
          example: '안녕하세요'
     })
     content: string;
}