import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import HeaderBar from '../../src/components/headerBar/headerBar.component';

describe('<HeaderBar />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<HeaderBar />);

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').text()).toBe('Header Bar');
  });
});
