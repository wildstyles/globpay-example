import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';


import { routes } from '../../common/routes';
import { CreateUserHandler, CreateUserCommand } from '@/application/users/create-user.command';
import { CreateUserRequestDto } from './create-user.request.dto';
import { CreateUserResponseDto } from './create-user.response.dto';

@ApiTags(routes.createUser.apiTag)
@Controller()
export class CreateUserController {
  constructor(private readonly handler: CreateUserHandler) {}

  @Post(routes.createUser.path())
  @ApiOkResponse({ type: CreateUserResponseDto })
  async createUser(
    @Body() body: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    const command = new CreateUserCommand(body);

    const result = await this.handler.execute(command);

    return new CreateUserResponseDto(result.id);
  }
}