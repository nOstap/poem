import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AddPoeamHandler } from './handlers/add-poem.handler';
import { GetPoemsHandler } from './handlers/get-poems.handler';
import { PoemAddedHandler } from './handlers/poem-added.handler';
import { PoemController } from './poem.controller';
import { PoemRepository } from './repositories/poem.repository';
import { PoemSagas } from './sagas/poem.sagas';

@Module({
  imports: [CqrsModule],
  controllers: [PoemController],
  providers:[
    PoemRepository,
    AddPoeamHandler,
    GetPoemsHandler,
    PoemAddedHandler,
    PoemSagas,
  ]
})
export class PoemModule {}
