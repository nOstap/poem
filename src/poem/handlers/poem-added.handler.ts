import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { PoemAddedEvent } from './../events/poem-added.event';

@EventsHandler(PoemAddedEvent)
export class PoemAddedHandler implements IEventHandler<PoemAddedEvent> {
    constructor(
        
    ) {}

    handle(event: PoemAddedEvent) {
        Logger.log(event, PoemAddedEvent.name);
    }
}