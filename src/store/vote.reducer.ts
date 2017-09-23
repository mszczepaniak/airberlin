import * as voteActions from './vote.actions';

export interface VoteState {
  count: number;
}

export const initialState: VoteState = {
  count: 0
};

export function voteReducer(state: VoteState = initialState, action: voteActions.voteActionTypes) {

  switch (action.type) {

    case voteActions.VOTE_FOR: {
      return { ...state, count: state.count + 1 };
    }

    case voteActions.VOTE_AGAINST: {
      return { ...state, count: state.count - 1 };
    }

    case voteActions.VOTE_RESET: {
      return { ...state, count: action.payload };
    }

    default: {
      return state;
    }

  }
}
