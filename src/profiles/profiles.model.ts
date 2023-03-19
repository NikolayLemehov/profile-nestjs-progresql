import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
// import { Role } from '../roles/roles.model';
// import { UserRoles } from '../roles/user-roles.model';

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

  // @Column({
  //   type: DataType.STRING,
  //   allowNull: false,
  // })
  // password: string;
  //
  // @Column({
  //   type: DataType.BOOLEAN,
  //   defaultValue: false,
  // })
  // banned: boolean;
  //
  // @Column({
  //   type: DataType.STRING,
  //   defaultValue: '',
  // })
  // banReason: string;

  // @BelongsToMany(() => Role, () => UserRoles)
  // roles: Role[];
}
