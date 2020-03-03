import { IEvent } from '@nestjs/cqrs';
import { Author } from '../models/author.model';

export class AuthorCreatedEvent implements IEvent {
  constructor(author: Author) {}
}
