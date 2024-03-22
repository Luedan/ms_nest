import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ProxyModule } from '@/common/proxy/proxy.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ProxyModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
