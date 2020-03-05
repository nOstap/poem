import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AddPoeamHandler } from './handlers/add-poem.handler';
import { GetPoemsHandler } from './handlers/get-poems.handler';
import { PoemAddedHandler } from './handlers/poem-added.handler';
import { PoemController } from './poem.controller';
import { PoemRepository } from './repositories/poem.repository';
import { PoemSagas } from './sagas/poem.sagas';

@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: 'POEM_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'poem',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'poem-consumer'
          }
        }
      },
    ]),
  ],
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
