import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxyGateway } from '../common/proxy/client-proxy';
import { PostMessages } from '@/common/constants';
import { PostRequestDto } from './dto/postRequest.dto';
import { Observable } from 'rxjs';
import { PostResponseDto } from './dto/postResponse.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('post')
@ApiTags('Post')
export class PostController {
  constructor(private readonly clientProxy: ClientProxyGateway) {}
  private _clientProxyPost = this.clientProxy.clientProxyPosts();

  @Post()
  create(@Body() postDto: PostRequestDto): Observable<PostResponseDto> {
    return this._clientProxyPost.send(PostMessages.CREATE, postDto);
  }

  @Get()
  findAll(): Observable<PostResponseDto[]> {
    return this._clientProxyPost.send(PostMessages.FIND_ALL, '');
  }

  @Get(':id')
  findOne(id: string): Observable<PostResponseDto> {
    return this._clientProxyPost.send(PostMessages.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() postDto: PostRequestDto,
  ): Observable<PostResponseDto> {
    return this._clientProxyPost.send(PostMessages.UPDATE, { id, postDto });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyPost.send(PostMessages.DELETE, id);
  }
}
