import React from 'react';
import { createMount } from '@material-ui/core/test-utils';

import SectionFive from '../../src/components/sectionFive/sectionFive.component';

describe('<SectionFive />', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render correctly', () => {
    const wrapper = mount(<SectionFive />);
    expect(wrapper).toHaveLength(1);
  });
});
