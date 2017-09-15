import { State } from './app.reducer';
export interface PostsState {
  posts: State;
}

export interface PostsModel {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface CommentsModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
