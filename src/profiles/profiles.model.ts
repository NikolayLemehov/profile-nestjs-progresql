import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { User } from '../users/users.model';

interface ProfileCreationAttrs {
  firstName: string;
}

@Table({ tableName: 'profiles' })
export class Profile extends Model<Profile, ProfileCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  secondName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  state: string;

  @HasOne(() => User)
  user: User;
}
