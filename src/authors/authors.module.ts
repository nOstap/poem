import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AuthorsController } from './authors.controller';
import { CreateAuthorHandler } from './handlers/create-author.handler';

@Module({
  imports: [CqrsModule],
  controllers: [AuthorsController],
  providers: [CreateAuthorHandler],
})
export class AuthorsModule {}
