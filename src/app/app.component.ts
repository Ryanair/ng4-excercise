import { getPosts, getComments, getSelectedPost } from './app.reducer';
import { PostsFetchStartAction, PostsSelectStartAction } from './app.actions';
import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'app';
  public posts$;
  public comments$;
  public selectedPost$;

  constructor(private store$: Store<any>) {
    this.posts$ = this.store$.select(getPosts);
    this.store$.dispatch(new PostsFetchStartAction());
    this.comments$ = this.store$.select(getComments);
    this.selectedPost$ = this.store$.select(getSelectedPost);
  }

  public onSelect(event) {
    this.store$.dispatch(new PostsSelectStartAction(event));
  }
}
