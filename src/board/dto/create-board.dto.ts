import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateBoardDto {
     
     @MinLength(2)
     @MaxLength(20)
     @IsNotEmpty()  
     title: string;

     @IsNotEmpty()
     content: string;
}