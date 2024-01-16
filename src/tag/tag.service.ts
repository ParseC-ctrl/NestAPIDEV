import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { tagIdDTO } from './dto/id.dto';
import { Tag } from './entities/tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    const tag = new Tag();
    tag.tagName = createTagDto.tagName;
    return await this.tagRepository.save(tag);
  }

  async getAllTags() {
    return await this.tagRepository.find();
  }

  async getTagById(tagId: tagIdDTO) {
    const result = await this.tagRepository.findOneBy(tagId);
    if (!result) {
      throw new NotFoundException('没有找到相关标签');
    }
    return result;
  }

  async update(updateTagDto: UpdateTagDto) {
    const { tagId } = updateTagDto;
    const one = await this.tagRepository.findOneBy({ tagId });
    if (!one) {
      throw new NotFoundException('未查到相关tagId');
    }
    return await this.tagRepository.save(updateTagDto);
  }

  async removeTagById({ tagId }: tagIdDTO) {
    return this.tagRepository.delete(tagId);
  }
}
