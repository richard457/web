import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { interval } from 'rxjs/observable/interval';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

    private clock: Observable<any>;

    constructor() {
        const source = interval(1000);
      // Observable.create().interval
        this.clock = source.map(tick => new Date().getMinutes()).share();
    }

    getClock(): Observable<Date> {
        return this.clock;
    }
}
