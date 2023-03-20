import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserDto {
  @ApiProperty({ example: '1', description: 'User id' })
  readonly id: string;
}
