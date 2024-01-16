import { IsNotEmpty } from 'class-validator';

export class CreateTypeDto {
  @IsNotEmpty({ message: 'typeName 不能为空' })
  readonly typeName: string;
}
