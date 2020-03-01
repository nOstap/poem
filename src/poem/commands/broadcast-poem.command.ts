import { ICommand } from "@nestjs/cqrs";

export class BroadcastPoemCommand implements ICommand {
    constructor(public readonly poemId: string) {}
}