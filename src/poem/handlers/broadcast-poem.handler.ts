import { PoemRepository } from './../repositories/poem.repository';
import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { BroadcastPoemCommand } from './../commands/broadcast-poem.command';
import { Logger } from '@nestjs/common';

@CommandHandler(BroadcastPoemCommand)
export class BroadcastPoemHandler
  implements ICommandHandler<BroadcastPoemCommand> {
  constructor(private readonly poemRepo: PoemRepository) {}

  async execute(command: BroadcastPoemCommand): Promise<void> {
    const poem = this.poemRepo.findById(command.poemId);
    Logger.log(`"${poem.content}" - ${poem.author}`);
  }
}
