import api from '../../utils/api';

import { setAuthUserActionCreator } from '../authUser/action';
import { startLoadingActionCreator, stopLoadingActionCreator } from '../isLoading/action';

const ActionType = {
  SET_IS_PRELOAD: 'SET_ID_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(startLoadingActionCreator());
    try {
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      console.error(error);
      dispatch(setAuthUserActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
      dispatch(stopLoadingActionCreator());
    }
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
