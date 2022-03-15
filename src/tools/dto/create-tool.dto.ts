import { IsNotEmpty } from 'class-validator';

export class CreateToolDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  link: string;

  @IsNotEmpty()
  tags: string[];
}
