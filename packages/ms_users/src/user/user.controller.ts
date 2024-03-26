import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserMessages } from '../common/constants';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(UserMessages.CREATE)
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern(UserMessages.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern(UserMessages.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.userService.findOne(id);
  }

  @MessagePattern(UserMessages.UPDATE)
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern(UserMessages.DELETE)
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }
}
