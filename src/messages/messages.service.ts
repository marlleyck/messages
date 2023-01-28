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

  update(id: number, message: MessageType) {
    const messageIndex = this.messages.findIndex(
      (message) => message.id === id,
    );

    this.messages[messageIndex] = message;

    return message;
  }

  delete(id: number) {
    const messageIndex = this.messages.findIndex(
      (message) => message.id === id,
    );

    delete this.messages[messageIndex];

    return true;
  }
}
