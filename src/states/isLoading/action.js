const ActionType = {
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

function startLoadingActionCreator() {
  return {
    type: ActionType.START_LOADING,
  };
}

function stopLoadingActionCreator() {
  return {
    type: ActionType.STOP_LOADING,
  };
}

export { ActionType, startLoadingActionCreator, stopLoadingActionCreator };
