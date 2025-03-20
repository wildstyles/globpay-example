import { Entity, Property } from '@mikro-orm/core';

import { BaseEntity } from './base.entity';

@Entity({ tableName: 'users' })
export class UserEntity extends BaseEntity {
  @Property({ length: 255, type: 'varchar' })
  name: string;

  @Property({ length: 255, type: 'varchar' })
  email: string;
}