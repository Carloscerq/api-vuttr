import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { Tool } from './entities/tool.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tool) private readonly toolRepository: Repository<Tool>,
  ) {}

  async create(createToolDto: CreateToolDto) {
    try {
      const tool = this.toolRepository.create({
        title: createToolDto.title,
        description: createToolDto.description,
        link: createToolDto.link,
        tags: createToolDto.tags,
      });

      return this.toolRepository.save(tool);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAll() {
    return this.toolRepository.find();
  }

  async remove(id: string) {
    try {
      await this.toolRepository.delete(id);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async findAllByTag(tag: string) {
    return await this.toolRepository.find({
      where: {
        tags: tag,
      },
    });
  }
}
