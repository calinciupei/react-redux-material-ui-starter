import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import FooterBar from '../../src/components/footerBar/footerBar.component';

describe('<FooterBar />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  afterAll(() => {
    shallow.cleanUp();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<FooterBar />);

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').text()).toBe('Footer Bar');
  });
});
