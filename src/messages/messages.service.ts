import { Injectable } from '@nestjs/common';
import { MessageType } from './MessageType';

@Injectable()
export class MessagesService {
  private messages: MessageType[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: number) {
    return this.messages.find((message) => message.id === id);
  }

  create(message: MessageType) {
    return this.messages.push(message);
  }
}
