import { Body, Controller, Get } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './dto/message.dto';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  SendMessage(@Body() messageDto: MessageDto) {
    return this.messageService.sendMessage(messageDto);
  }
}
