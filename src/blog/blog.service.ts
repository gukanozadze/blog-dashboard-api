import { Injectable } from '@nestjs/common';
import { BlogCreateDto } from './dto/blog.dto';
import { Blog } from './interface/blog.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BlogService {
  private blogs: Blog[] = []

  create(blogData: BlogCreateDto, userId: string,): Blog {
    const newBlog = { ...blogData, userId, id: uuidv4() }
    this.blogs.push(newBlog)
    return newBlog
  }

  getAll(userId: string): Blog[] {
    return this.blogs.filter(blog => blog.userId === userId)
  }

  delete(id: string): Blog[] {
    this.blogs = this.blogs.filter(blog => blog.id !== id)
    return this.blogs
  }
}
