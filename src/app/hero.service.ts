import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Heroes fetched.')
    return of(HEROES);
  }
}
