import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogCreateDto } from './dto/blog.dto';
import { Blog } from './interface/blog.interface';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Post()
  create(@Body() data: { blogData: BlogCreateDto, userId: string }): Blog {
    return this.blogService.create(data.blogData, data.userId)
  }

  @Delete('/:id')
  delete(@Param('id') id): Blog[] {
    return this.blogService.delete(id)
  }

  @Get('/:userId')
  getAll(@Param('userId') userId): Blog[] {
    return this.blogService.getAll(userId)
  }

}
