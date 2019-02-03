import reducer from '../../../src/containers/initApp/initApp.reducers';
import * as types from '../../../src/containers/initApp/initApp.constants';

describe('initApp.reducers', () => {
  let initialState;
  let actulaState;
  let action;
  let expectedState;

  initialState = {
    done: false,
    success: null
  };

  afterEach(() => {
    actulaState = undefined;
    action = undefined;
    expectedState = undefined;
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('when DEPENDENCY_DONE dispatched', () => {
    it('should return the update state', () => {
      action = {
        type: types.DEPENDENCY_DONE
      };
      actulaState = reducer(initialState, action);
      expectedState = {
        done: true,
        success: true,
      };

      expect(actulaState).toEqual(expectedState);
    });
  });
});
