import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

import { CommentsModel, PostsModel } from './models';

@Component({
  selector: 'posts',
  template: `<div *ngFor="let post of posts" (click)="select(post.id)">
              <h5>{{post.id}}</h5>
              <h3>{{post.title}}</h3>
              <span>{{post.body}}</span>
              <comments *ngIf="post.id === selectedPost" [comments]="comments"></comments>
            </div>`,
  styles: ['div { background: lightgrey}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {
  @Input() posts: PostsModel;
  @Input() comments: CommentsModel;
  @Input() selectedPost: number;
  @Output() public onSelect = new EventEmitter<string>();

  public select(id) {
    this.onSelect.emit(id);
  }
}
