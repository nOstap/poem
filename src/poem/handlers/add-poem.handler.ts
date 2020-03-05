import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Author } from '../models/author.model';
import { PoemRepository } from '../repositories/poem.repository';
import { AddPoemCommand } from './../commands/add-poem.command';

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
