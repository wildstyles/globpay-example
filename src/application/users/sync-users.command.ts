import { Injectable } from '@nestjs/common';

import { CommandHandler } from '../common/command.handler';


export class SyncUsersCommand {
  readonly ids: number[]

  constructor(ids: number[]) {
    this.ids = ids;
  }
}


@Injectable()
export class SyncUsersHandler extends CommandHandler<SyncUsersCommand, void> {
  async implementation(command: SyncUsersCommand): Promise<void> {

    console.log('Syncing users...');
  }
}