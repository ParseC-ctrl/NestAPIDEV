import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { TypeService } from './type.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { typeIdDTO } from './dto/id.dto';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Post('create')
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typeService.create(createTypeDto);
  }

  @Get('list/:typeId')
  getTypeByTypeId(@Param() typeId: typeIdDTO) {
    return this.typeService.getTypeByTypeId(typeId);
  }

  @Get('list')
  getAllTypes() {
    return this.typeService.getAllTypes();
  }

  @Put('edit')
  update(@Body() updateTypeDto: UpdateTypeDto) {
    return this.typeService.update(updateTypeDto);
  }

  @Delete('delete')
  delete(@Body() typeId: typeIdDTO) {
    console.log(typeId);
    return this.typeService.removeTypeById(typeId);
  }
}
