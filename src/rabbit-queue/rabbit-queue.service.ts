

import { Injectable, Query } from '@nestjs/common';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';

import { SyncUsersCommand, SyncUsersHandler } from '@/application/users/sync-users.command';


@Injectable()
export class RabbitQueueService {
  constructor(private readonly syncUsersHandler: SyncUsersHandler) {}

  @MessagePattern('sync_users')
  async syncUsers(@Payload() data: number[]) {

    await this.syncUsersHandler.execute(new SyncUsersCommand(data));
  }
}

