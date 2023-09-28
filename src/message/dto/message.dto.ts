import { IsNotEmpty, isNotEmpty } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  OTP: string;

  @IsNotEmpty()
  NomorHp: string;
}
