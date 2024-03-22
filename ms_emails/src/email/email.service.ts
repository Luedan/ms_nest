import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class EmailService {
  private _emailTransporter: Transporter;

  constructor() {
    this._emailTransporter = createTransport({
      host: process.env.EMAIL_HOST,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async send(sendEmailDto: SendEmailDto) {
    await this._emailTransporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: sendEmailDto.to,
      subject: sendEmailDto.subject || '',
      text: sendEmailDto.text || '',
      html: sendEmailDto.html || '',
    });
  }
}
