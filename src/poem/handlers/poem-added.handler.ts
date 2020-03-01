import { PoemRepository } from './../repositories/poem.repository';
import { Logger } from '@nestjs/common';
import { IEventHandler, EventsHandler } from "@nestjs/cqrs";
import { PoemAddedEvent } from '../events/poem-added.event';

@EventsHandler(PoemAddedEvent)
export class PoemAddedHandler implements IEventHandler<PoemAddedEvent> {
    constructor(private readonly poemRepo: PoemRepository) {}

    handle(event: PoemAddedEvent) {
        Logger.log(event.constructor.name);
    }
}