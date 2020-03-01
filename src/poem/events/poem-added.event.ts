import { IEvent } from "@nestjs/cqrs";
import { Poem } from 'src/poem/models/poem.model';

export class PoemAddedEvent implements IEvent {
    constructor(
        public readonly poem: Poem,
    ){}
}