import { Injectable } from '@nestjs/common';
import { Saga, IEvent, ICommand, ofType } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PoemAddedEvent } from '../events/poem-added.event';
import { BroadcastPoemCommand } from '../commands/broadcast-poem.command';

@Injectable()
export class PoemSagas {
  @Saga()
  poemAdded = (events$: Observable<IEvent>): Observable<ICommand> => {
    return events$.pipe(
      ofType(PoemAddedEvent),
      map(event => new BroadcastPoemCommand(event.poem.id)),
    );
  };
}
