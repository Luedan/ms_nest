import { Injectable } from '@nestjs/common';

interface IConnectedClient {
  [key: string]: string;
}

@Injectable()
export class ChatService {
  private connectedClients: IConnectedClient = {};

  addClient(clientId: string) {
    this.connectedClients[clientId] = clientId;
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients() {
    return Object.keys(this.connectedClients).length;
  }
}
