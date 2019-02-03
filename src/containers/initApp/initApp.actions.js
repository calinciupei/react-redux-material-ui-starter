import { DEPENDENCY_DONE } from './initApp.constants';

export const getDependencySuccess = () => {
  return (dispatch) => (
    dispatch({
      type: DEPENDENCY_DONE
    })
  );
};
