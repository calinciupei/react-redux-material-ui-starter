import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import Logo from '../../src/components/logo/logo.component';

describe('<Logo />', () => {
  let shallow, wrapper;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<Logo />);
  });

  it('should render correctly', () => {
    expect(wrapper.find('div').hasClass('logo')).toBe(true);
  });
});
