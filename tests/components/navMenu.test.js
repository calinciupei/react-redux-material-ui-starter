import React from 'react';
import { shallow } from 'enzyme';

import NavMenu from '../../src/components/navMenu/navMenu.component';

let context;

const createComponent = () => shallow(<NavMenu />);

describe('<NavMenu />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context.dive()).toMatchSnapshot();
  });
});
