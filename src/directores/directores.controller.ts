import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { DirectoresService } from './directores.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { Director } from './director.entity';

@Controller('/directores')
export class DirectoresController {
  constructor(private readonly directoresService: DirectoresService) {}

  @Post()
  create(@Body() createDirectorDto: CreateDirectorDto): Promise<Director> {
    return this.directoresService.create(createDirectorDto);
  }

  @Get()
  findAll(): Promise<Director[]> {
    return this.directoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Director> {
    return this.directoresService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDirectorDto: CreateDirectorDto): Promise<Director> {
    return this.directoresService.update(id, updateDirectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.directoresService.remove(id);
  }
}

