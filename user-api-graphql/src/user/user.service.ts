import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private userRepository: Repository<User>
  )
  {}
  
  async findUserById(id: string): Promise<User>{
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('user dont found');
    }
    return user;
  }

  async findAllUsers() : Promise<User[]>{
    const users = await this.userRepository.find();
    return users;
  }

  async createUser(data: CreateUserInput): Promise<User>{
    const user = this.userRepository.create(data);
    const userSaved = await this.userRepository.save(user);

    if (!userSaved) {
      throw new InternalServerErrorException('Oh its dont work, problem to create user');
    }

    return userSaved;
  }

  async updateUser(id: string, data: UpdateUserInput): Promise<User>{
    const user = await this.findUserById(id);

    await this.userRepository.update(user, {...data});

    const userUpdated = this.userRepository.create({...user, ...data});

    return userUpdated;
  }

  async deleteUser(id: string): Promise<boolean> {
    const user = await this.findUserById(id);

    const deleted = await this.userRepository.delete(user);

    if (deleted) {
      return true;
    }

    return false;
  }
  
}
