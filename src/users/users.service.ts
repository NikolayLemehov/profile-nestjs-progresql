import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserProfileDto } from './dto/CreateUserProfileDto';
import { Profile } from '../profiles/profiles.model';
import { FindByRoleDto } from './dto/FindByRoleDto';
import { UpdateUserProfileDto } from './dto/UpdateUserProfileDto';
import { CreateUserDto } from './dto/CreateUserDto';
import { CreateProfileDto } from '../profiles/dto/CreateProfileDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    @InjectModel(Profile) private profileRepository: typeof Profile,
  ) {}

  async create(dto: CreateUserProfileDto) {
    const { username, email, role, firstName, lastName, state } = dto;
    const userDto: CreateUserDto = {
      username,
      email,
      role,
    };
    const profileDto: CreateProfileDto = {
      firstName,
      lastName,
      state,
    };
    const user = await this.userRepository.create(userDto);
    const profile = await this.profileRepository.create(profileDto);
    await user.$set('profile', profile.id);
    return user;
  }

  async getAll() {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async findByRole(dto: FindByRoleDto) {
    return await this.userRepository.findAll({
      where: {
        role: dto.role,
      },
    });
  }

  async update(dto: UpdateUserProfileDto) {
    const { id, username, email, role, firstName, lastName, state } = dto;

    const user = await this.userRepository.findByPk(id);

    if (!user) {
      throw new HttpException(
        `User with this id: ${id} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    const profile = await this.profileRepository.findByPk(user.profileId);

    if (username) user.username = username;
    if (email) user.email = email;
    if (role) user.role = role;

    if (firstName) profile.firstName = firstName;
    if (lastName) profile.lastName = lastName;
    if (state) profile.state = state;

    await user.save();
    await profile.save();

    return await this.userRepository.findByPk(id, { include: { all: true } });
  }

  async delete(id: number) {
    const user = await this.userRepository.findByPk(id);

    if (!user) {
      throw new HttpException(
        `User with this id: ${id} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }

    await Profile.destroy({ where: { id: user.profileId } });
    await User.destroy({ where: { id } });
    return `The user with id: ${id} has been deleted.`;
  }
}
