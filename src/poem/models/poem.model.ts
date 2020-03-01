import { PoemAddedEvent } from '../events/poem-added.event';
import { v4 as uuidv4 } from 'uuid';
import { AggregateRoot } from '@nestjs/cqrs';

export class Poem extends AggregateRoot {
  id: string;
  author: string;
  content: string;

  constructor(author: string, content: string) {
    super();

    if (!author || !content) {
      throw new Error('Silly input detected while creating new poem.');
    }

    this.id = uuidv4();
    this.author = author;
    this.content = content;

    this.apply(new PoemAddedEvent(this));
  }
}
