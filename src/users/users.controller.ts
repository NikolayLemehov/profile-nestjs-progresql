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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserProfileDto: CreateUserProfileDto) {
    return this.usersService.create(createUserProfileDto);
  }

  @ApiOperation({ summary: 'Get user list' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @ApiOperation({ summary: 'Get user list by role' })
  @ApiResponse({ status: 200, type: [User] })
  @Post('/role')
  findByRole(@Body() findByRoleDto: FindByRoleDto) {
    return this.usersService.findByRole(findByRoleDto);
  }

  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, type: User })
  @Put('/update')
  update(@Body() updateUserProfileDto: UpdateUserProfileDto) {
    return this.usersService.update(updateUserProfileDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  delete(@Param() deleteUserDto: DeleteUserDto) {
    return this.usersService.delete(+deleteUserDto.id);
  }
}
