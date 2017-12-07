import { Participant } from './../app/model/participant.model';
import { Action } from '@ngrx/store';

export const GET_PARTICIPANTS = '[Voter] Vote get participants';
export const GET_PARTICIPANTS_SUCCESS = '[Voter] Vote get participants success';
export const GET_PARTICIPANTS_FAIL = '[Voter] Vote get participants fail';

export const VOTE_FOR = '[Voter] Vote for';
export const VOTE_AGAINST = '[Voter] Vote against';
export const VOTE_RESET = '[Voter] Vote reset';


export class VoteForAction implements Action {
  readonly type = VOTE_FOR;
}

export class VoteAgainstAction implements Action {
  readonly type = VOTE_AGAINST;
}

export class VoteResetAction implements Action {
  readonly type = VOTE_RESET;
  constructor(public payload: number) {}
}

export class GetParticipantsAction implements Action {
  readonly type = GET_PARTICIPANTS;
}

export class GetParticipantsSuccessAction implements Action {
  readonly type = GET_PARTICIPANTS_SUCCESS;
  constructor(public payload: Participant[]) {}
}

export class GetParticipantsFailAction implements Action {
  readonly type = GET_PARTICIPANTS_FAIL;
  constructor(public payload: string) {}
}

export type voteActionTypes =
VoteForAction |
VoteAgainstAction |
VoteResetAction
| GetParticipantsAction
| GetParticipantsSuccessAction
| GetParticipantsFailAction;
