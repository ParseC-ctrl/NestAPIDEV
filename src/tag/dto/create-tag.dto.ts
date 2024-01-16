import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    description: '标签名',
    example: '甜品',
  })
  @IsNotEmpty({ message: 'tagName 不能为空' })
  readonly tagName: string;
}
