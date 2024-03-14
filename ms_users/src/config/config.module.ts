import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '5326',
      database: 'ms_test',
      synchronize: true,
      entities: [User],
    }),
  ],
  exports: [],
})
@Global()
export class ConfigModule {}
