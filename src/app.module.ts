import { Module } from '@nestjs/common';

import { controllers } from './controllers';

import { commands, queries } from './application';

import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers,
  providers: [...commands, ...queries],
})
export class AppModule {}
