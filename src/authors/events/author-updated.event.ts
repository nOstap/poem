import { IEvent } from "@nestjs/cqrs";
import { Name } from './../models/name.model';
import { Author } from "../models/author.model";

export class AuthorUpdatedEvent implements IEvent {
    constructor(authorId: string, changes: Partial<Author>) {}
}