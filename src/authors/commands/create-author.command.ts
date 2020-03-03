import { CreateAuthorDto } from './../dtos/create-author.dto';
import { ICommand } from "@nestjs/cqrs";

export class CreateAuthorCommand implements ICommand {
    constructor(public readonly createAuthorDto: CreateAuthorDto) {}
}