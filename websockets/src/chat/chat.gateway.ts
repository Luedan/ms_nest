import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true, namespace: 'chat' })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    this.chatService.addClient(client.id);

    this.server.emit('clients', this.chatService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.chatService.removeClient(client.id);
    this.server.emit('clients', this.chatService.getConnectedClients());
  }
}
