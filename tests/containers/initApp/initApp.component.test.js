import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/containers/initApp/initApp.actions';
import * as constants from '../../../src/containers/initApp/initApp.constants';

import { InitApp } from '../../../src/containers/initApp/initApp.component';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('<InitApp />', () => {
  let wrapper, store, props, componentWillReceivePropsSpy;

  beforeEach(() => {
    const initialState = {
      ready: true
    };
    props = {
      dispatch: () => false,
      children: ''
    };

    store = mockStore(initialState);

    wrapper = shallow(<InitApp store={store} {...props} />);

    componentWillReceivePropsSpy = jest.spyOn(InitApp.prototype, 'componentWillReceiveProps');
  });

  it('should return initial state', () => {
    expect(wrapper.state('ready')).toBe(true);
  });

  it('should render error', () => {
    wrapper.setState({ ready: false });
    expect(wrapper.find('Fragment').text()).toEqual('Error!!!');
  });

  it('should dispatch the correct actions', () => {
    const expectedActions = {
      type: constants.DEPENDENCY_DONE
    };
    const store = mockStore({});

    store.dispatch(actions.getDependencySuccess());
    expect(store.getActions()).toEqual([expectedActions]);
  });

  it('shallow called hooks', () => {
    expect(componentWillReceivePropsSpy).not.toHaveBeenCalled();
  });
});
