import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserEntity } from './database/user.entity';
import { UserDto } from './dtos/user.dto';
import { IUser } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }

  @Post()
  @ApiBody({ type: UserDto})
  async Create(@Body() user: UserDto): Promise<UserEntity> {
    return await this.usersService.create(user);
  } 
}
