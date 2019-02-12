import React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import NavMenu from '../../src/components/navMenu/navMenu.component';

describe('<NavMenu />', () => {
  let mount, wrapper;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    wrapper = mount(<NavMenu />);
    expect(wrapper.find('.nav-menu')).toHaveLength(1);
  });
});
