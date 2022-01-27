import { Controller, Post } from '@nestjs/common';
import { IUser } from './Contracts/IUser';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  create(user: IUser): IUser {
    return this.usersService.create(user);
  }
}