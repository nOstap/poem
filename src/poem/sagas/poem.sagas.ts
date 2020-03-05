import { Injectable, Inject } from '@nestjs/common';
import { Saga, IEvent, ICommand, ofType } from '@nestjs/cqrs';
import { Observable, empty, EMPTY } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PoemAddedEvent } from '../events/poem-added.event';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class PoemSagas {
  @Saga()
  poemAdded = (events$: Observable<IEvent>): Observable<ICommand> => {
    return events$.pipe(
      ofType(PoemAddedEvent),
      mergeMap(event => {
        this.clientKafka.emit('AddAuthorPoemCommand', {
          poemId: event.poem.id,
          authorId: event.poem.author.id,
        });
        return EMPTY;
      }),
    );
  };

  constructor(
    @Inject('POEM_SERVICE') private readonly clientKafka: ClientKafka,
  ) {}
}
