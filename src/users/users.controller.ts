import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserProfileDto } from './dto/CreateUserProfileDto';
import { FindByRoleDto } from './dto/FindByRoleDto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserProfileDto: CreateUserProfileDto) {
    return this.usersService.create(createUserProfileDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Get('/role')
  findByRole(@Body() findByRoleDto: FindByRoleDto) {
    return this.usersService.findByRole(findByRoleDto);
  }
}
