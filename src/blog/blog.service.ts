import { Injectable } from '@nestjs/common';
import { BlogCreateDto } from './dto/blog.dto';
import { Blog } from './interface/blog.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BlogService {
  private readonly blogs: Blog[] = []


  create(blogData: BlogCreateDto): Blog {
    console.log(blogData)
    const newBlog = { ...blogData, id: uuidv4() }
    this.blogs.push(newBlog)
    return newBlog
  }

  getAll(): Blog[] {
    return this.blogs
  }
}
