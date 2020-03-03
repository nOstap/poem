import { Logger } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Poem } from '../models/poem.model';
import { GetPoemsQuery } from '../queries/get-poems.query';
import { PoemRepository } from './../repositories/poem.repository';

@QueryHandler(GetPoemsQuery)
export class GetPoemsHandler implements IQueryHandler<GetPoemsQuery> {
  constructor(
    private readonly poemRepo: PoemRepository
    ) {}

  async execute(query: GetPoemsQuery): Promise<Poem[]> {
    return this.poemRepo.findAll();
  }
}
