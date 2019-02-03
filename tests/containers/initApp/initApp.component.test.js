import React from 'react';
import { shallow } from 'enzyme';

import InitApp from '../../../src/containers/initApp/initApp.component';

const setup = () => {
  const props = {
    dispatch: jest.fn(),
  };

  const context = shallow(<InitApp {...props} />);

  return { props, context };
};

describe('<InitApp />', () => {
  it('should render correctly', () => {
    const { context } = setup();

    context.setState({ ready: true });
  });
});
