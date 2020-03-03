import { AddPoemDto } from './../dtos/add-poem.dto';
import { Poem } from '../models/poem.model';
import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/core/classes/abstract-repository';
import { Author } from '../models/author.model';

@Injectable()
export class PoemRepository extends AbstractRepository<Poem> {
  create(content: string, author: Author): Poem {
    const newPoem = new Poem({
      content,
      author,
    });
    return newPoem;
  }
}
