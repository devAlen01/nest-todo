import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TodoService } from 'src/todo/todo.service';

@Module({
  providers: [TodoService, PrismaService],
  exports: [PrismaService], // Это необходимо, чтобы PrismaService был доступен в других модулях
})
export class PrismaModule {}
