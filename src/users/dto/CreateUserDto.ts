import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John', description: 'User name' })
  readonly username: string;

  @ApiProperty({ example: 'mail@mail.com', description: 'User email' })
  readonly email: string;

  @ApiProperty({ example: 'user', description: 'User role' })
  readonly role: string;
}
