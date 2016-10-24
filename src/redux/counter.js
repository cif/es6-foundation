import { createAction } from 'redux-actions';

// Constant
export const UPDATE_COUNTER = 'UPDATE_COUNTER';

// Action
export const updateCounter = createAction(UPDATE_COUNTER);

// Default
export const defaultState = 0;

// Reducer
export default function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_COUNTER:
      return action.payload;
    default:
      return state;
  }
}
