import { Injectable } from '@nestjs/common';

import { CommandHandler } from '../common/command.handler';
import {
  CreateUserCommand as Command,
  CreateUserCommandResponse as Response,
} from './create-user.command';
import { CreateUserRequestDto } from '@/controllers/users/create-user/create-user.request.dto';
import { CreateUserResponseDto } from '@/controllers/users/create-user/create-user.response.dto';

@Injectable()
export class CreateUserHandler extends CommandHandler<Command, Response> {
  async implementation(command: Command): Promise<Response> {

    const user = this.dbContext.users.create({ ...command });

    return { id: user.id };
  }
}


export class CreateUserCommand {
  readonly name: string;

  readonly email: string;

  readonly password: string;

  readonly age: number;

  constructor(request: CreateUserRequestDto) {
    this.name = request.name;
    this.age = request.age;
    this.email = request.email;
    this.password = request.password;
  }
}

export type CreateUserCommandResponse = CreateUserResponseDto;