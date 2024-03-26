import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { RabbitMQ } from '../constants';

@Injectable()
export class ClientProxyGateway {
  constructor(private readonly config: ConfigService) {}

  clientProxyUsers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        queueOptions: {
          durable: false,
        },
        urls: [this.config.get('AMQP_URL')],
        queue: RabbitMQ.USER_QUEUE,
      },
    });
  }

  clientProxyPosts(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.config.get('AMQP_URL')],
        queue: RabbitMQ.POST_QUEUE,
      },
    });
  }
}
