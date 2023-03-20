import { ApiProperty } from '@nestjs/swagger';

export class FindByRoleDto {
  @ApiProperty({ example: 'user', description: 'User role' })
  readonly role: string;
}
