import { Injectable } from '@nestjs/common';
import { MessageDto } from './MessageDto';
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
    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    const message = this.messages.find((msg) => msg?.id === id);

    if (!message) {
      throw Error(`Message with ID '${id}' not found!`);
    }

    return message;
  }

  create(messageDto: MessageDto) {
    const id = this.messages.length;

    const message: MessageType = {
      id,
      ...messageDto,
    };

    this.messages.push(message);

    return message;
  }

  async update(id: number, messageDto: MessageDto) {
    const messageIndex = this.messages.findIndex((msg) => msg?.id === id);

    if (messageIndex < 0) {
      throw Error(`Message with ID '${id}' not found!`);
    }

    const message: MessageType = {
      id,
      ...messageDto,
    };

    this.messages[messageIndex] = message;

    return message;
  }

  async delete(id: number) {
    const messageIndex = this.messages.findIndex((msg) => msg?.id === id);

    if (messageIndex < 0) {
      throw Error(`Message with ID '${id}' not found!`);
    }

    delete this.messages[messageIndex];

    return true;
  }
}
