import { Body } from '@nestjs/common';
import { Controller, Get, Post, Param } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUsersById(@Param('id') id: string): User {
    // TODO implement auto parse
    return this.usersService.findById(id);
  }

  @Post()
  createUser(@Body() body: CreateUserDTO): User {
    
  }
}
