import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from './Contracts/IUser';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index(): IUser[] {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() user: IUser): IUser {
    return this.usersService.create(user);
  }
}
