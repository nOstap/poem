import { ICommand } from "@nestjs/cqrs";
import { UpdateAuthorDto } from "../dtos/update-author.dto";

export class UpdateAuthorCommand implements ICommand {
    constructor(public readonly updateAuthorDto: UpdateAuthorDto) {}
}