import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { Grid } from '@material-ui/core';

import SectionThree from '../../src/components/sectionThree/sectionThree.component';

describe('<SectionThree />', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    const wrapper = mount(<SectionThree />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render <Grid />', () => {
    const wrapper = mount(<SectionThree />);
    expect(wrapper.find(Grid)).toHaveLength(2);
  });
});
