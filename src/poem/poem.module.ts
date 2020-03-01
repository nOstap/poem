import { PoemSagas } from './sagas/poem.sagas';
import { PoemRepository } from './repositories/poem.repository';
import { PoemAddedHandler } from './handlers/poem-added.handler';
import { BroadcastPoemHandler } from './handlers/broadcast-poem.handler';
import { AddPoeamHandler } from './handlers/add-poem.handler';
import { Module } from '@nestjs/common';
import { PoemController } from './poem.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { GetPoemsHandler } from './handlers/get-poems.handler';

@Module({
  imports: [CqrsModule],
  controllers: [PoemController],
  providers:[
    PoemRepository,
    AddPoeamHandler,
    BroadcastPoemHandler,
    GetPoemsHandler,
    PoemAddedHandler,
    PoemSagas,
  ]
})
export class PoemModule {}
