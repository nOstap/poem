import { Poem } from 'src/poem/models/poem.model';
import { AggregateRoot } from '@nestjs/cqrs';
import { uuid } from 'uuid';
import { AuthorCreatedEvent } from '../events/author-created.event';
import { AuthorUpdatedEvent } from './../events/author-updated.event';
import { Name } from './name.model';

class AuthorParms {
  name: Name;
  id?: string;
}

export class Author extends AggregateRoot {
  id: string;
  name: string;

  constructor(params: AuthorParms) {
    super();

    if (!!params.name) {
      throw new Error('Name must by specified.');
    }

    this.id = params.id || uuid();
  }

  create() {
    this.apply(new AuthorCreatedEvent(this));
  }

  update(changes: Partial<Author>) {
    this.apply(new AuthorUpdatedEvent(this.id, changes));
  }

}
