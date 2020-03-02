import { AddPoemDto } from './../dtos/add-poem.dto';
import { Poem } from '../models/poem.model';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PoemRepository {
  poems: Poem[] = [];

  create(poemDto: AddPoemDto): Poem {
    const newPoem = new Poem(poemDto.author, poemDto.content);
    this.poems.push(newPoem);

    return newPoem;
  }

  findById(id: string): Poem {
    return this.poems.find(poem => id === poem.id);
  }

  findAll(): Poem[] {
    return this.poems;
  }
}
