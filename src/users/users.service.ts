import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUser } from './Contracts/IUser';
import { UserEntity } from './database/UserEntity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity)
       private userRepository: Repository<UserEntity>) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async create(user: IUser): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }
}
