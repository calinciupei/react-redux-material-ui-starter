import { DEPENDENCY_DONE } from './initApp.constants';

const getDependencySuccess = () => dispatch =>
  dispatch({
    type: DEPENDENCY_DONE
  });

export { getDependencySuccess };
