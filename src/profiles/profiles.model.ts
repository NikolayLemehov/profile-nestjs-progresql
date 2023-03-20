import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { ApiProperty } from '@nestjs/swagger';

interface ProfileCreationAttrs {
  firstName: string;
}

@Table({ tableName: 'profiles' })
export class Profile extends Model<Profile, ProfileCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John', description: 'User first name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @ApiProperty({ example: 'Dou', description: 'User second name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  secondName: string;

  @ApiProperty({ example: 'mail', description: 'User mail' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @HasOne(() => User)
  user: User;
}
