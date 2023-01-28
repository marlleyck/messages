import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessageType } from './MessageType';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessagesService) {}

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messageService.findById(Number(params.id));
  }

  @Post()
  create(@Body() body: MessageType) {
    return this.messageService.create(body);
  }
}
