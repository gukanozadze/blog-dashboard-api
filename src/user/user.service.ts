import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import User from './interfaces/user.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create({ email, password }: CreateUserDto): User {
    // Prevent creating user with same email
    if (this.users.find(user => user.email === email)) {
      throw new ForbiddenException('User is created with this email');
    }

    const newUser = {
      id: uuidv4(), // Generates unique id
      email,
      password,
    };
    this.users.push(newUser);
    return newUser;
  }

  login(user: CreateUserDto): User {
    const logedInUser = this.users.find(
      ({ email, password }) => email === user.email && password === user.password,
    );
    if (logedInUser) {
      return logedInUser;
    } else {
      throw new NotFoundException('Email or password is Incorrect');
    }
  }

  loginId(id: string): User {
    const logedInUser = this.users.find(user => id === user.id);

    if (logedInUser) {
      return logedInUser;
    } else {
      throw new NotFoundException('Id is Incorrect, unexpected error. This error may occur if you restarted backend server and userId still exists in localstorage. Try going to inspect => Application => Local Storage => https://localhost:3000 and delete userId');
    }
  }
}
