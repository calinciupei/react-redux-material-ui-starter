import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { Grid } from '@material-ui/core';

import Jumbotron from '../../src/components/jumbotron/jumbotron.component';

describe('<Jumbotron />', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  afterAll(() => {
    mount.cleanUp();
  });

  it('should render <Grid />', () => {
    const wrapper = mount(<Jumbotron />);
    expect(wrapper.find(Grid)).toHaveLength(2);
  });
});
