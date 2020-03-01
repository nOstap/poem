import { Poem } from 'src/poem/models/poem.model';
import { AddPoemCommand } from './commands/add-poem.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AddPoemDto } from './dtos/add-poem.dto';
import {
  Controller,
  Body,
  Post,
  Get,
  BadRequestException,
} from '@nestjs/common';
import { GetPoemsQuery } from './queries/get-poems.query';

@Controller('poem')
export class PoemController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async create(@Body() poem: AddPoemDto) {
    try {
      return await this.commandBus.execute(new AddPoemCommand(poem));
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get()
  async findAll(): Promise<Poem[]> {
    return this.queryBus.execute(new GetPoemsQuery());
  }
}
