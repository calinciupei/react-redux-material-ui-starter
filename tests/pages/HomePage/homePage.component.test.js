import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import { HomePage } from '../../../src/pages/HomePage/homePage.component';

describe('<HomePage />', () => {
  let shallow, wrapper;

  beforeAll(() => {
    shallow = createShallow();
    wrapper = shallow(<HomePage />);
  });

  afterAll(() => {
    wrapper.cleanUp();
  });

  it('should render error', () => {
    expect(wrapper.state('dependenciesLoaded')).toBe(true);
  });
});
