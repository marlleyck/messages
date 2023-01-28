import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessageDto } from './MessageDto';
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
    return this.messageService.findById(Number(params.id)).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messageService.create(messageDto);
  }

  @Put(':id')
  update(@Param() params, @Body() body: MessageType) {
    return this.messageService.update(Number(params.id), body);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.messageService.delete(Number(params.id));
  }
}
