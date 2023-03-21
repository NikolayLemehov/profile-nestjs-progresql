import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserProfileDto {
  @ApiProperty({ example: '1', description: 'User id' })
  readonly id: number;
  @ApiProperty({ example: 'John', description: 'User name' })
  readonly username?: string;
  @ApiProperty({ example: 'mail@mail.com', description: 'User email' })
  readonly email?: string;
  @ApiProperty({ example: 'user', description: 'User role' })
  readonly role?: string;
  @ApiProperty({ example: 'John', description: 'User first name' })
  readonly firstName?: string;
  @ApiProperty({ example: 'Dou', description: 'User last name' })
  readonly lastName?: string;
  @ApiProperty({ example: 'mail', description: 'User mail' })
  readonly state?: string;
}
