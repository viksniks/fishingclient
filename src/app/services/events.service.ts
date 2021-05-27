import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  offline$ = new Subject<boolean>();
  config$ = new Subject<Object>();

  constructor() { }

  watchOffline() {
    return this.offline$;
  }

  updateOffline(value: boolean) {
    this.offline$.next(value);
  }

  watchConfig() {
    return this.config$;
  }

  updateConfig(value: Object) {
    this.config$.next(value);
  }
}
