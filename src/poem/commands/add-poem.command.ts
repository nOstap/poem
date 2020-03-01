import { AddPoemDto } from './../dtos/add-poem.dto';
import { ICommand } from '@nestjs/cqrs';
export class AddPoemCommand implements ICommand {
    constructor(public readonly poem: AddPoemDto) {

    }
}