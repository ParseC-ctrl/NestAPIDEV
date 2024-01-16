import { IsNotEmpty } from 'class-validator';

export class UpdateTypeDto {
  @IsNotEmpty({ message: 'typeId 不能为空' })
  readonly typeId: string;
  @IsNotEmpty({ message: 'typeName 不能为空' })
  readonly typeName: string;
}
