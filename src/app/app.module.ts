import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppEffects } from './app.effects';
import * as posts from './app.reducer';
import { CommentsComponent } from './comments.component';
import { PostsComponent } from './posts.component';

interface State {
  posts: posts.State;
}

const REDUCERS: ActionReducerMap<State> = {
  posts: posts.reducer
};

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCERS),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
