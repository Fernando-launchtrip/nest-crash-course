import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: uuidv4(),
      name: 'Fernando',
    },
    {
      id: uuidv4(),
      name: 'Bob',
    },
    {
      id: uuidv4(),
      name: 'Jack',
    },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(userID: string): User {
    return this.users.find((user) => user.id === userID);
  }

  createUser(createUserDTO: CreateUserDTO): User {
    const newUser = {
      id: uuidv4(),
      ...createUserDTO,
    };

    this.users.push(newUser);

    return newUser;
  }
}
