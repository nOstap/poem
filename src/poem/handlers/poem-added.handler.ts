import { ClientKafka } from '@nestjs/microservices';
import { Logger, Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PoemAddedEvent } from './../events/poem-added.event';

@EventsHandler(PoemAddedEvent)
export class PoemAddedHandler implements IEventHandler<PoemAddedEvent> {
  constructor(
    @Inject('POEM_SERVICE') private readonly clientKafka: ClientKafka,
  ) {}

  handle(event: PoemAddedEvent) {
    Logger.log(event, PoemAddedEvent.name);
    this.clientKafka.emit(PoemAddedEvent.name, {
      event,
    });
  }
}
