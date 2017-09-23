import { browser } from 'protractor';
import { VoteState } from './../store/vote.reducer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as voteActions from '../store/vote.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  votes$: Observable<any>;
  votes: any;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    const selectorQuery = (state) => state.votes.count;

    this.store
      .select(selectorQuery)
      .subscribe(votes => this.votes = votes);
  }

  increment() {
    this.store.dispatch(new voteActions.VoteForAction);
  }

  decrement() {
    this.store.dispatch(new voteActions.VoteAgainstAction);

  }

  reset() {
    this.store.dispatch(new voteActions.VoteResetAction(0));
  }

}
