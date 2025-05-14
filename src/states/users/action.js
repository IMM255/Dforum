import api from '../../utils/api';
import { startLoadingActionCreator, stopLoadingActionCreator } from '../isLoading/action';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(startLoadingActionCreator());
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    } finally {
      dispatch(stopLoadingActionCreator());
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
