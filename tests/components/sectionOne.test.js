import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Grid from '@material-ui/core/Grid';

import SectionOne from '../../src/components/sectionOne/sectionOne.component';

describe('<SectionOne />', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    const wrapper = mount(<SectionOne />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render <Grid />', () => {
    const wrapper = mount(<SectionOne />);
    expect(wrapper.find(Grid)).toHaveLength(2);
  });
});
