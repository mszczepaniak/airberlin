import { voteReducer } from './vote.reducer';
import * as voteActions from './vote.actions';

describe(`vote Reducer`, () => {

    describe(`vote for action`, () => {

      it(`should increase vote count`, () => {
        const currentState = {
          count: 0,
          participants: null,
          participantsError: null
        };
        const expectedResult = {
          count: 2,
          participants: null,
          participantsError: null
        };

        const action = new voteActions.VoteForAction();
        const result = voteReducer(currentState, action);
        expect(result).toEqual(expectedResult);
      });

      it(`should decrease vote count`, () => {
        const currentState = {
          count: 1,
          participants: null,
          participantsError: null
        };
        const expectedResult = {
          count: 0,
          participants: null,
          participantsError: null
        };

        const action = new voteActions.VoteAgainstAction();
        const result = voteReducer(currentState, action);
        expect(result).toEqual(expectedResult);
      });

      it(`should get participants`, () => {
        const currentState = {
          count: 1,
          participants: null,
          participantsError: null
        };
        const expectedResult = {
          count: 1,
          participants: [
            { name: 'a', surname: 'b', gender: 'c', region: 'd'}
          ],
          participantsError: null
        };

        const action = new voteActions.GetParticipantsSuccessAction([{ name: 'a', surname: 'b', gender: 'c', region: 'd'}]);
        const result = voteReducer(currentState, action);
        expect(result).toEqual(expectedResult);
      });

    });
});
