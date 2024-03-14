import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { ProxyModule } from '@/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [PostController],
})
export class PostModule {}
