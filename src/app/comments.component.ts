import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommentsModel } from './models';

@Component({
  selector: 'comments',
  template: `<div *ngFor="let comment of comments">
              <h3>Name: {{comment.name}}</h3>
              <h4>{{comment.body}}</h4>
              <h5>{{comment.email}}</h5>
            </div>`,
  styles: ['div { background: lightblue}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {
  @Input() comments: CommentsModel;
}
