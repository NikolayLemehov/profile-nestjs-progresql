import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserProfileDto } from './dto/CreateUserProfileDto';
import { Profile } from '../profiles/profiles.model';
import { FindByRoleDto } from './dto/FindByRoleDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    @InjectModel(Profile) private profileRepository: typeof Profile,
  ) {}

  async create(dto: CreateUserProfileDto) {
    const { username, email, role, firstName, secondName, state } = dto;
    console.log({ username, email, role, firstName, secondName, state });
    const userDto = {
      username,
      email,
      role,
    };
    const profileDto = {
      firstName,
      secondName,
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
}
