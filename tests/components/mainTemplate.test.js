import React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import MainTemplate from '../../src/components/mainTemplate/mainTemplate.component';

describe('<MainTemplate />', () => {
  let mount, wrapper;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should work correctly', () => {
    wrapper = mount(<MainTemplate />);
    expect(wrapper.find('HeaderBar')).toHaveLength(1);
  });
  it('should work correctly', () => {
    wrapper = mount(<MainTemplate />);
    expect(wrapper.find('FooterBar')).toHaveLength(1);
  });
});
