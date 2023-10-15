import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

 export class UpdateBoardDto {

     @IsNotEmpty()
     @ApiProperty({
        // swagger
        description: '내용',
        required: true,
        example: '안녕하세요'
   })
     content?: string;
}



// Typescript 특징
// export class UpdateBoardDto extends PartialType(CreateBoardDto) {} // 확장 + optional로 가져옴, CreateBoardDto의 IsNotEmpty 삭제
// export class UpdateBoardDto extends PickType(CreateBoardDto, ['title']) {} // 골라서 가져옴
// export class UpdateBoardDto extends OmitType(CreateBoardDto, ['title']) {} // 삭제하도 남은거 가져옴