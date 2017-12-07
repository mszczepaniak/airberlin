import * as voteActions from './vote.actions';
import { Participant } from '../app/model/participant.model';

export interface VoteState {
  count: number;
  participants: Participant[];
  participantsError: string;
}

export const initialState: VoteState = {
  count: 0,
  participants: null,
  participantsError: null
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

    case voteActions.GET_PARTICIPANTS_SUCCESS: {
      return { ...state, participants: action.payload };
    }

    case voteActions.GET_PARTICIPANTS_FAIL: {
      return { ...state, participantsError: action.payload };
    }

    default: {
      return state;
    }

  }
}

export const getVoteCount = (state) => state.vote.count;
export const getParticipants = (state) => state.vote.participants;
