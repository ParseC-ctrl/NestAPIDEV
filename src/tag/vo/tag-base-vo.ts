import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';
export class TagBaseItem {
  @ApiProperty({ description: '标签ID', example: uuidv4() })
  tagId: string;
  @ApiProperty({ description: '标签名称', example: '咸' })
  tagName: string;
  @ApiProperty({ description: '创建时间', example: '2021-07-03' })
  createTime: Date;
  @ApiProperty({ description: '更新时间', example: '2021-07-03' })
  updateTime: Date;
}
