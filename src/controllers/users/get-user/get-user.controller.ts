import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { routes } from '../../common/routes';
import { GetUserResponseDto } from './get-user.response.dto';

import { GetUserHandler, GetUserQuery } from '@/application/users/get-user.query';

@ApiTags(routes.getUser.apiTag)
@Controller()
export class GetUserController {
  constructor(private readonly handler: GetUserHandler) {}

  @Get(routes.getUser.path())
  @ApiOkResponse({ type: GetUserResponseDto })
  async getUser(
    @Param(routes.getUser.params.id!) id: string,
  ): Promise<GetUserResponseDto> {
    const query = new GetUserQuery(id);

    const result = await this.handler.execute(query);

    return new GetUserResponseDto(result.id, result.name, result.email, result.age);
  }
}