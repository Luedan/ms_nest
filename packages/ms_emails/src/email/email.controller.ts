import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';
import { EmailMessages } from '@/common/constants';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern(EmailMessages.SEND_EMAIL)
  create(@Payload() sendEmailDto: SendEmailDto) {
    return this.emailService.send(sendEmailDto);
  }
}
