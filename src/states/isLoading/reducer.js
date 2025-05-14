import { ActionType } from './action';

const initialState = false;

export default function isLoadingReducer(state = initialState, action = {}) {
  switch (action.type) {
  case ActionType.START_LOADING:
    return true;
  case ActionType.STOP_LOADING:
    return false;
  default:
    return state;
  }
}
