import { Injectable } from '@nestjs/common';

@Injectable()
export class PoemSagas {
  // @Saga()
  // poemAdded = (events$: Observable<IEvent>): Observable<ICommand> => {
  //   return events$.pipe(
  //     ofType(PoemAddedEvent),
  //     map(event => new UpdateAuthorPoemCount(event.poem.authorId)),
  //   );
  // };
}
