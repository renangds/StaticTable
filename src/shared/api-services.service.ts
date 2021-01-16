import { Injectable } from '@angular/core';
import { Observable, Observer, forkJoin } from 'rxjs';
import { map, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  constructor() { }
}
