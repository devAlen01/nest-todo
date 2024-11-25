import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.post.findMany();
  }

  async getById(id: number) {
    return this.prisma.post.findUnique({
      where: { id: +id },
    });
  }

  async create(title: string, content: string, imageUrl: string) {
    return this.prisma.post.create({
      data: {
        title,
        content,
        imageUrl,
      },
    });
  }

  async update(id: number, title: string, content: string, imageUrl: string) {
    return this.prisma.post.update({
      where: { id: +id },
      data: {
        title,
        content,
        imageUrl,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}
