import { IsNotEmpty } from 'class-validator';

export class typeIdDTO {
  @IsNotEmpty({ message: 'typeId 不能为空' })
  readonly typeId: string & string[];
}
