import { ParticipantsService } from './participants.service';
import { browser } from 'protractor';
import { VoteState } from './../store/vote.reducer';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as voteActions from '../store/vote.actions';
import {getVoteCount, getParticipants} from '../store/vote.reducer';
// import {getVoteCount} from '../store/vote.reducer';
import { Participant } from './model/participant.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  votes$: Observable<any>;
  votes: any;
  participants: Participant;

  constructor(private store: Store<any>) {}

  ngOnInit() {

    this.store
      .select(getVoteCount)
      .subscribe(votes => this.votes = votes);

    // THIS IS HOW YOU WOULD DO IT BEFORE WITHOUT REDUX
    // this.participantsService.getParticipants().subscribe((participants) => this.participants = participants);
    this.store.dispatch(new voteActions.GetParticipantsAction);
    this.store
      .select(getParticipants)
      .subscribe(participants => {
        this.participants = participants;
      });
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
