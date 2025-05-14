import api from '../../utils/api';
import { startLoadingActionCreator, stopLoadingActionCreator } from '../isLoading/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

function asyncPopulateUserAndThreads() {
  return async (dispatch) => {
    dispatch(startLoadingActionCreator());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }  finally {
      dispatch(stopLoadingActionCreator());
    }
  };
}

export { asyncPopulateUserAndThreads };
