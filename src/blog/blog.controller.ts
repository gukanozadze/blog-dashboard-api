import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogCreateDto } from './dto/blog.dto';
import { Blog } from './interface/blog.interface';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) { }

  @Post()
  create(@Body() BlogDto: BlogCreateDto): Blog {
    return this.blogService.create(BlogDto)
  }

  @Get()
  getAll(): Blog[] {
    return this.blogService.getAll()
  }

}
