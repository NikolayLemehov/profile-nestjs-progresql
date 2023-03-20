import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserProfileDto } from './dto/CreateUserProfileDto';
import { FindByRoleDto } from './dto/FindByRoleDto';
import { UpdateUserProfileDto } from './dto/UpdateUserProfileDto';
import { DeleteUserDto } from './dto/DeleteUserDto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserProfileDto: CreateUserProfileDto) {
    return this.usersService.create(createUserProfileDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @Post('/role')
  findByRole(@Body() findByRoleDto: FindByRoleDto) {
    return this.usersService.findByRole(findByRoleDto);
  }

  @Put('/update')
  update(@Body() updateUserProfileDto: UpdateUserProfileDto) {
    return this.usersService.update(updateUserProfileDto);
  }

  @Delete('/:id')
  delete(@Param() deleteUserDto: DeleteUserDto) {
    return this.usersService.delete(+deleteUserDto.id);
  }
}
