import { Action } from '@ngrx/store';

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

export type  voteActionTypes =
VoteForAction |
VoteAgainstAction |
VoteResetAction;
