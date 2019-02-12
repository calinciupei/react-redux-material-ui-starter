import React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import { AboutUs } from '../../../src/pages/AboutUs/aboutUs.component';

describe('<AboutUs />', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render error', () => {
    const wrapper = mount(<AboutUs />);
    expect(wrapper.find('div div').text()).toEqual('AboutUs Component');
  });
});
