import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty({ example: 'John', description: 'User first name' })
  readonly firstName: string;
  @ApiProperty({ example: 'Dou', description: 'User second name' })
  readonly secondName: string;
  @ApiProperty({ example: 'mail', description: 'User mail' })
  readonly state: string;
}
