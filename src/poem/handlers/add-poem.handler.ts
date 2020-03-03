import { AddPoemCommand } from './../commands/add-poem.command';
import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { PoemRepository } from '../repositories/poem.repository';
import { Logger } from '@nestjs/common';
import { Author } from '../models/author.model';

@CommandHandler(AddPoemCommand)
export class AddPoeamHandler implements ICommandHandler<AddPoemCommand> {
  constructor(
    private readonly poemRepo: PoemRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: AddPoemCommand): Promise<void> {
    const { content, authorName } = command.addPoemDto;
    const poem = this.publisher.mergeObjectContext(
        this.poemRepo.create(content, new Author({ name: authorName }))
    );
    poem.commit();
  }
}
