import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAll() {
    return this.todoService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return this.todoService.getById(id);
  }

  @Post()
  async create(
    @Body() body: { title: string; content: string; imageUrl: string },
  ) {
    return this.todoService.create(body.title, body.content, body.imageUrl);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.todoService.delete(id);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: number,
    @Body() body: { title: string; content: string; imageUrl: string },
  ) {
    return this.todoService.update(id, body.title, body.content, body.imageUrl);
  }
}
