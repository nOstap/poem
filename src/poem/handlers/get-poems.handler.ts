import { Logger } from '@nestjs/common';
import { PoemRepository } from './../repositories/poem.repository';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPoemsQuery } from '../queries/get-poems.query';
import { Poem } from '../models/poem.model';

@QueryHandler(GetPoemsQuery)
export class GetPoemsHandler implements IQueryHandler<GetPoemsQuery> {
  constructor(private readonly poemRepo: PoemRepository) {}

  async execute(query: GetPoemsQuery): Promise<Poem[]> {
    Logger.log(query.constructor.name);
    return this.poemRepo.findAll();
  }
}
