import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';
export class tagIdDTO {
  @ApiProperty({
    description: '标签ID',
    example: uuidv4(),
    required: true,
  })
  @IsNotEmpty({ message: 'tagId 不能为空' })
  readonly tagId: string & string[];
}
