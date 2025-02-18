import { Inject } from '@nestjs/common';

import { DB_QUERY_CONTEXT_TOKEN, IDbQueryContext } from '@/database/db-context.service';

export interface IQueryHandler<TQuery extends object, TResult = any> {
  execute(command: TQuery): Promise<TResult>;
}

export abstract class QueryHandler<
  Query extends object,
  Response,
> implements IQueryHandler<Query, Response>
{
  @Inject(DB_QUERY_CONTEXT_TOKEN)
  protected readonly dbContext: IDbQueryContext;

  async execute(query: Query): Promise<Response> {
    const result = await this.implementation(query);

    return result;
  }

  abstract implementation(query: Query): Promise<Response>;
}