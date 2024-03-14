import { IsNumber, IsString } from 'class-validator';

export class UserRequestDto {
  @IsNumber()
  id: number;
  @IsNumber()
  age: number;
  @IsString()
  name: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
