import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as actions from './app.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  @Effect()
  public posts$: Observable<any> = this.actions$
    .ofType(actions.ActionTypes.FETCH_START)
    .switchMap((action: actions.PostsFetchStartAction) =>
      this.http
        .get('https://jsonplaceholder.typicode.com/posts')
        .map(actions.PostsFetchSuccessAction.of)
        .catch(err => of(actions.PostsFetchErrorAction.of(err)))
      );

  @Effect()
  public comment$: Observable<any> = this.actions$
    .ofType(actions.ActionTypes.SELECT_START)
    .switchMap((action: actions.PostsSelectStartAction) =>
      this.http
        .get(`https://jsonplaceholder.typicode.com/posts/${action.payload}/comments`)
        .map(actions.PostsSelectSuccessAction.of)
        .catch(err => of(actions.PostsSelectErrorAction.of(err)))
      );
}
