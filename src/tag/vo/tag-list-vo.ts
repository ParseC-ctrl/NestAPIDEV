import { ApiProperty } from '@nestjs/swagger';
import { TagBaseItem } from './tag-base-vo';
export class TagListResp {
  @ApiProperty({ description: '状态码', example: 200 })
  code: number;

  @ApiProperty({
    description: '数据',
    type: () => Array<TagBaseItem>,
    example: [
      {
        tagId: '320404ac-f4d3-4711-9f29-949a38a087d7',
        tagName: '低卡路里',
        createTime: '2024-01-15T13:38:27.517Z',
        updateTime: '2024-01-15T13:38:27.517Z',
      },
      {
        tagId: 'ebd1963d-aad2-4c88-959a-b4d823d4beff',
        tagName: '0卡路里',
        createTime: '2024-01-15T13:50:42.517Z',
        updateTime: '2024-01-15T13:50:42.517Z',
      },
    ],
  })
  data: Array<TagBaseItem>;

  @ApiProperty({ description: '请求结果信息', example: '请求成功' })
  message: string;
}
