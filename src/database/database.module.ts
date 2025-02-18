import { Module } from '@nestjs/common';

import { MikroOrmModule } from '@mikro-orm/nestjs';

import {
  PgDatabaseModule,
} from './pgdatabase.module';

import { DbCommandContext, DbQueryContext, DB_COMMAND_CONTEXT_TOKEN, DB_QUERY_CONTEXT_TOKEN } from './db-context.service';

import { UserRepository } from './repositories/user.repository';
import { UserEntity } from './entities/user.entity';

const repositories = [UserRepository];
const entities = [UserEntity];


@Module({
  imports: [PgDatabaseModule, MikroOrmModule.forFeature(entities)],
  providers: [
    ...repositories,
    { provide: DB_COMMAND_CONTEXT_TOKEN, useClass: DbCommandContext },
    { provide: DB_QUERY_CONTEXT_TOKEN, useClass: DbQueryContext },
  ],
  exports: [
    { provide: DB_COMMAND_CONTEXT_TOKEN, useClass: DbCommandContext },
    { provide: DB_QUERY_CONTEXT_TOKEN, useClass: DbQueryContext },
  ],
})
export class DatabaseModule {}