import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { Grid } from '@material-ui/core';

import SectionSix from '../../src/components/sectionSix/sectionSix.component';

describe('<SectionSix />', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    const wrapper = mount(<SectionSix />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render <Grid />', () => {
    const wrapper = mount(<SectionSix />);
    expect(wrapper.find(Grid)).toHaveLength(2);
  });
});
