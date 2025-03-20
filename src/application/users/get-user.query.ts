
import { GetUserResponseDto } from '@/controllers/users/get-user/get-user.response.dto';

import { Injectable } from '@nestjs/common';

import { QueryHandler } from '../common/query.handler';


@Injectable()
export class GetUserHandler extends QueryHandler<GetUserQuery, GetUserQueryResponse> {
  async implementation(query: GetUserQuery): Promise<GetUserQueryResponse> {
    const user = await this.dbContext.users.findOneOrFail(query.id);

    return user;
  }
}

export class GetUserQuery {
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export type GetUserQueryResponse = GetUserResponseDto;