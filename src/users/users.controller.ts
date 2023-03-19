import {Body, Controller, Get, Injectable, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/CreateUserDto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post()
  create(@Body() dtoCreateUser: CreateUserDto) {
    return this.usersService.create(dtoCreateUser);
  }

  @Get()
  getAll() {
    return this.usersService.getAll();
  }
}
