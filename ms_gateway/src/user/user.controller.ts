import { ClientProxyGateway } from '@/common/proxy/client-proxy';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRequestDto } from './dto/userRequest.dto';
import { Observable } from 'rxjs';
import { UserResponseDto } from './dto/userResponse.dto';
import { UserMessages } from '@/common/constants';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyGateway) {}
  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  @Post()
  create(@Body() userDto: UserRequestDto): Observable<UserResponseDto> {
    return this._clientProxyUser.send(UserMessages.CREATE, userDto);
  }

  @Get()
  findAll(): Observable<UserResponseDto[]> {
    return this._clientProxyUser.send(UserMessages.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<UserResponseDto> {
    return this._clientProxyUser.send(UserMessages.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() userDto: UserRequestDto,
  ): Observable<UserResponseDto> {
    return this._clientProxyUser.send(UserMessages.UPDATE, { id, userDto });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(UserMessages.DELETE, id);
  }
}
