import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
export class UpdateTagDto {
  @ApiProperty({
    description: '标签ID',
    example: uuidv4(),
    required: true,
  })
  @IsNotEmpty({ message: 'tagId 不能为空' })
  readonly tagId: string;
  @ApiProperty({
    description: '标签名',
    example: '甜品',
  })
  @IsNotEmpty({ message: 'tagName 不能为空' })
  readonly tagName: string;
}
