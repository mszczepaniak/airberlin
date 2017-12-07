import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ParticipantsService } from './../app/participants.service';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import * as voteActions from './vote.actions';

@Injectable()
export class VoteEffects {
    constructor(
        private actions$: Actions,
        public participantsService: ParticipantsService
    ) { }

    // tslint:disable-next-line:member-ordering
    @Effect() loadParticipants$ = this.actions$
        .ofType(voteActions.GET_PARTICIPANTS)
        .switchMap(() => {
            return this.participantsService.getParticipants()
                // .do(result => console.log('WATCH OUT, GONNA DEBUGGIN HERE', result))
                .map(participants => new voteActions.GetParticipantsSuccessAction(participants));
        }).catch(err => of(new voteActions.GetParticipantsFailAction(err)));
}
