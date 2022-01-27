import { Injectable } from '@nestjs/common';
import { IUser } from './Contracts/IUser';

@Injectable()
export class UsersService {
  private users: IUser[] = [];

  create(user: IUser): IUser {
    this.users.push(user);
    return user;
  }
}
