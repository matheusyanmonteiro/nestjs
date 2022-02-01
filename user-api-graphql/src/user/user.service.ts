import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private userRepository: Repository<User>
  )
  {}

  async findAllUsers() : Promise<User[]>{
    const users = await this.userRepository.find();
    return users;
  }

  async createUser(data: CreateUserInput): Promise<User>{
    const user = await this.userRepository.create(data);
    const userSaved = await this.userRepository.save(user);

    if (!userSaved) {
      throw new InternalServerErrorException('Oh its dont work, problem to create user');
    }

    return userSaved;
  }
}
