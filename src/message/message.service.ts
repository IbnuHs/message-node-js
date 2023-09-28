import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';
// import Twilio from 'twilio/lib/rest/Twilio';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageService {
  private client: twilio.Twilio;
  constructor() {
    this.client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
    // this.twilioClient = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
  }
  async sendMessage(messageDto: MessageDto) {
    try {
      const { OTP, NomorHp } = messageDto;
      await this.client.messages.create({
        body: OTP,
        from: process.env.PHONE_NUMBER,
        to: NomorHp,
      });

      return {
        message: 'Code OTP Successfully Send',
      };
    } catch (error) {
      console.log(error);
    }
  }
}
