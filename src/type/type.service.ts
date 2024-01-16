import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { Repository } from 'typeorm';
import { Type } from './entities/type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { typeIdDTO } from './dto/id.dto';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(Type)
    private readonly typeRepository: Repository<Type>,
  ) {}

  async create(createTypeDto: CreateTypeDto) {
    const type = new Type();
    type.typeName = createTypeDto.typeName;
    return await this.typeRepository.save(type);
  }

  async update(updateTypeDto: UpdateTypeDto) {
    const { typeId } = updateTypeDto;
    const one = await this.typeRepository.findOneBy({ typeId });
    if (!one) {
      throw new NotFoundException('未查到相关typeId');
    }
    return await this.typeRepository.save(updateTypeDto);
  }

  async getTypeByTypeId(typeId: typeIdDTO) {
    return await this.typeRepository.findOneBy(typeId);
  }

  async removeTypeById({ typeId }: typeIdDTO) {
    return await this.typeRepository.delete(typeId);
  }

  async getAllTypes() {
    return await this.typeRepository.find();
  }
}
