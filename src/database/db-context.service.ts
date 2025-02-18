import { Injectable } from '@nestjs/common';

import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';


import { UserRepository } from './repositories/user.repository';
import { UserEntity } from './entities/user.entity';

export const DB_COMMAND_CONTEXT_TOKEN = 'DB_COMMAND_CONTEXT';
export const DB_QUERY_CONTEXT_TOKEN = 'DB_QUERY_CONTEXT';

export interface IDbContextBase {
  em: EntityManager;
}

export interface IDbCommandContext extends IDbContextBase {
  users: UserRepository;
}

@Injectable()
export class DbCommandContext implements IDbCommandContext {
  users: UserRepository;
  em: EntityManager;

  constructor(
    private readonly userRepository: UserRepository,
    private readonly entityManager: EntityManager,
  ) {
    this.em = this.entityManager;
    this.users = this.userRepository;
  }
}


export interface IDbQueryContext extends IDbContextBase {
  users: EntityRepository<UserEntity>;
}

@Injectable()
export class DbQueryContext implements IDbQueryContext {
  users: EntityRepository<UserEntity>;
  em: EntityManager;

  constructor(private readonly entityManager: EntityManager) {
    this.em = this.entityManager;
    this.users = this.em.getRepository(UserEntity);
  }
}