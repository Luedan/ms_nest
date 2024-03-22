import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { ClientProxyGateway } from '@/common/proxy/client-proxy';
import { EmailMessages } from '@/common/constants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly _userRepository: Repository<User>,
    private readonly _clientProxyGateway: ClientProxyGateway,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const response = await this._userRepository.save(createUserDto);
    return response;
  }

  async findAll() {
    await this._clientProxyGateway
      .clientProxyEmail()
      .emit(EmailMessages.SEND_EMAIL, {
        to: 'atencia17@gmail.com',
        subject: 'Hello',
        html: '<b>Hello this is a test message from myself</b>',
        text: '',
      });
    const response = await this._userRepository.find();
    return response;
  }

  async findOne(id: number) {
    const response = await this._userRepository.findOne({
      where: {
        id,
      },
    });
    return response;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    if (!user) {
      return null;
    }

    await this._userRepository.update(id, updateUserDto);

    return { ...user, ...updateUserDto };
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) {
      return null;
    }

    await this._userRepository.delete(id);

    return user;
  }
}
