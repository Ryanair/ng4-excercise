import { CommentsModel, PostsModel, PostsState } from './models';
import { createSelector } from '@ngrx/store';
import * as actions from './app.actions';

export interface State {
  loading: boolean;
  posts: PostsModel[];
  comments: CommentsModel[];
  selectedPost: number;
 }

const initialState: State = {
  loading: false,
  posts: [],
  comments: [],
  selectedPost: undefined
};

export function reducer(state = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.ActionTypes.FETCH_START:
      return {
        ...state,
        loading: true
      };
    case actions.ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      };
    case actions.ActionTypes.FETCH_ERROR:
      return state;
    case actions.ActionTypes.SELECT_START:
      return {
        ...state,
        selectedPost: action.payload,
        loading: true
      };
    case actions.ActionTypes.SELECT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload
      };
    case actions.ActionTypes.SELECT_ERROR:
      return state;

    default:
      return state;
    }
 }

const getPostsState = (state: PostsState) => state.posts;

export const getPosts = createSelector(getPostsState, (state) => state.posts);
export const getComments = createSelector(getPostsState, (state) => state.comments);
export const getSelectedPost = createSelector(getPostsState, (state) => state.selectedPost);
