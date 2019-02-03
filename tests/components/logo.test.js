import React from 'react';
import { shallow } from 'enzyme';

import Logo from '../../src/components/logo/logo.component';

let context;

const createComponent = () => shallow(<Logo />);

describe('<Logo />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context).toMatchSnapshot();
  });
});
