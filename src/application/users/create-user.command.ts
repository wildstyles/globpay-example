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

    // const user = this.dbContext.users.create({ ...command });

    return { id: 'test response id' };
  }
}


export class CreateUserCommand {
  readonly name: string;

  readonly email: string;


  constructor(request: CreateUserRequestDto) {
    this.name = request.name;
    this.email = request.email;
  }
}

export type CreateUserCommandResponse = CreateUserResponseDto;