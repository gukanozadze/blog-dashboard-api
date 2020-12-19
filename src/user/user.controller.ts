import { Body, Controller, Post, Param } from '@nestjs/common';
import { create } from 'domain';
import { CreateUserDto } from './dto/user.dto';
import User from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }


  @Post('register')
  register(@Body() createUserDto: CreateUserDto): User {
    return this.userService.create(createUserDto)
  }

  @Post('login')
  login(@Body() createUserDto: CreateUserDto): User {
    return this.userService.login(createUserDto)
  }

  @Post('login-id')
  loginId(@Body() { id }): User {
    return this.userService.loginId(id)
  }

}
