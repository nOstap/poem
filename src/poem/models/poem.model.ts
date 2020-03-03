import { AggregateRoot } from '@nestjs/cqrs';
import { v4 as uuid } from 'uuid';
import { PoemAddedEvent } from '../events/poem-added.event';
import { Author } from './author.model';

export interface AuthorParams {
  id?: string;
  content: string, 
  author: Author;
}

export class Poem extends AggregateRoot {
  id: string;
  author: Author;
  content: string;

  constructor(params: AuthorParams) {
    super();

    if (!params.author || !params.content) {
      throw new Error('Silly input detected while creating new poem.');
    }

    this.id = params.id || uuid();
    this.author = params.author;
    this.content = params.content;

    this.apply(new PoemAddedEvent(this));
  }
}
