import { IsOptional, MaxLength, MinLength } from "class-validator";

 export class UpdateBoardDto { // name, content -> optional

     @MinLength(2)
     @MaxLength(20)
     @IsOptional()
     title?: string;

     @IsOptional()
     content?: string;
}



// Typescript 특징
// export class UpdateBoardDto extends PartialType(CreateBoardDto) {} // 확장 + optional로 가져옴, CreateBoardDto의 IsNotEmpty 삭제
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['title']) {} // 골라서 가져옴
// export class UpdateBoardDto extends OmitType(CreateBoardDto, ['title']) {} // 삭제하도 남은거 가져옴