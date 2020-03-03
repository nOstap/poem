import { CreateAuthorCommand } from './../commands/create-author.command';
import { CreateAuthorDto } from './../dtos/create-author.dto';
import { ICommandHandler, CommandHandler, EventPublisher } from "@nestjs/cqrs";
import { AuthorRepository } from '../repository/author.repository';

@CommandHandler(CreateAuthorCommand)
export class CreateAuthorHandler implements ICommandHandler<CreateAuthorCommand> {
    constructor(
        private readonly authorsRepo: AuthorRepository,
        private readonly publisher: EventPublisher,
      ) {}
    
      async execute(command: CreateAuthorCommand): Promise<void> {
        const author = this.publisher.mergeObjectContext(
            this.authorsRepo.create(command.createAuthorDto)
        )
        author.commit();
      }
    }