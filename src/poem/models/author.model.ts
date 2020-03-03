import { AggregateRoot } from '@nestjs/cqrs';
import { v4 as uuid } from 'uuid';

class AuthorParms {
  name: string;
  id?: string;
}

export class Author extends AggregateRoot {
  id: string;
  name: string;

  constructor(params: AuthorParms) {
    super();

    if (!params.name) {
      throw new Error('Name must by specified.');
    }

    this.id = params.id || uuid();
    this.name = params.name;
  }

}
