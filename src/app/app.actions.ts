import { Action } from '@ngrx/store';

export const ActionTypes = {
  FETCH_START: '[Posts] Fetch start',
  FETCH_SUCCESS: '[Posts] Fetch success',
  FETCH_ERROR: '[Posts] Fetch error',
  SELECT_START: '[Posts] Select start',
  SELECT_SUCCESS: '[Posts] Select success',
  SELECT_ERROR: '[Posts] Select start'
 };

 export class PostsFetchStartAction implements Action {
  public type = ActionTypes.FETCH_START;
  constructor(public payload?: any) {}
 }

 export class PostsFetchSuccessAction implements Action {
  public type = ActionTypes.FETCH_SUCCESS;
  public static of(payload?: any) {
    return new PostsFetchSuccessAction(payload);
  }
  constructor(public payload?: any) {}
 }

 export class PostsFetchErrorAction implements Action {
  public type = ActionTypes.FETCH_ERROR;
  public static of(payload?: any) {
    return new PostsFetchErrorAction(payload);
  }
  constructor(public payload?: any) {}
 }

 export class PostsSelectStartAction implements Action {
  public type = ActionTypes.SELECT_START;
  constructor(public payload?: any) {}
 }

 export class PostsSelectSuccessAction implements Action {
  public type = ActionTypes.SELECT_SUCCESS;
  public static of(payload?: any) {
    return new PostsSelectSuccessAction(payload);
  }
  constructor(public payload?: any) {}
 }

 export class PostsSelectErrorAction implements Action {
  public type = ActionTypes.SELECT_ERROR;
  public static of(payload?: any) {
    return new PostsSelectErrorAction(payload);
  }
  constructor(public payload?: any) {}
 }

 export type Actions =
  | PostsFetchStartAction
  | PostsFetchSuccessAction
  | PostsFetchErrorAction
  | PostsSelectStartAction
  | PostsSelectSuccessAction
  | PostsSelectErrorAction;
