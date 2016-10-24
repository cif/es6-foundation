import assert from 'assert';
import counterReducer, { UPDATE_COUNTER } from './counter';

describe('src/redux/counter', () => {
  it('should return current state for unknown action type', () => {
    const state = 3;
    const newState = counterReducer(state, { type: 'UNKNOWN_ACTION_TYPE' });
    assert.deepEqual(newState, state, 'incorrect default state for unknown action');
  });

  it(`should return a new state matching action payload for ${UPDATE_COUNTER} action`, () => {
    const state = 3;
    const newState = counterReducer(state, { type: 'UPDATE_COUNTER', payload: 4 });
    assert.equal(newState, 4, `incorrect state for ${UPDATE_COUNTER}`);
  });
});
