import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { RabbitClientService } from '../rabbit-queue/rabbit-client.service';

@Injectable()
export class SyncUsersCron {
  constructor(private readonly rabbitClient: RabbitClientService) {}
  private readonly logger = new Logger(SyncUsersCron.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.rabbitClient.emit('sync_users', [1, 2, 3, 4, 5]);
  }
}