import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, RmqOptions } from '@nestjs/microservices';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<RmqOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.USER_QUEUE,
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.listen();
}
bootstrap();
