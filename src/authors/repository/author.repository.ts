import { AbstractRepository } from 'src/core/classes/abstract-repository';
import { CreateAuthorDto } from '../dtos/create-author.dto';
import { UpdateAuthorDto } from './../dtos/update-author.dto';
import { Author } from './../models/author.model';
import { Name } from './../models/name.model';

export class AuthorRepository extends AbstractRepository<Author> {
  create(createAuthorDto: CreateAuthorDto): Author {
    const name = new Name(createAuthorDto.firstName, createAuthorDto.lastName);
    const newAuthor = new Author({ name });
    this.entities.push(newAuthor);
    return newAuthor;
  }

}
