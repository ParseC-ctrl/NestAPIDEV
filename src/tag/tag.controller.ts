import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { tagIdDTO } from './dto/id.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { TagListResp } from './vo/tag-list-vo';
import { TagBaseItem } from './vo/tag-base-vo';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('create')
  create(@Body() tagCreateDTO: CreateTagDto) {
    return this.tagService.create(tagCreateDTO);
  }

  @Get('list/:tagId')
  getTagByTagId(@Param() tagId: tagIdDTO) {
    return this.tagService.getTagById(tagId);
  }

  @Get('list')
  @ApiOkResponse({ description: '文章列表', type: TagListResp })
  getTagsList(): Promise<Array<TagBaseItem>> {
    return this.tagService.getAllTags();
  }

  @Put('edit')
  update(@Body() tagEditDTO: UpdateTagDto) {
    return this.tagService.update(tagEditDTO);
  }

  @Delete('delete')
  delete(@Body() tagId: tagIdDTO) {
    return this.tagService.removeTagById(tagId);
  }
}
