import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';
import * as actions from '../../../src/containers/initApp/initApp.actions';
import * as constants from '../../../src/containers/initApp/initApp.constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('initApp.actions', () => {
  it('should dispatch the correct actions when shouldGet returns true', () => {
    const expectedActions = {
      type: constants.DEPENDENCY_DONE
    };
    const store = mockStore({});

    store.dispatch(actions.getDependencySuccess());
    expect(store.getActions()).toEqual([expectedActions]);
  });
});
