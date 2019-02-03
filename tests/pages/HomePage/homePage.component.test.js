import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../../../src/pages/HomePage/homePage.component';

let context;

const createComponent = () => shallow(<HomePage />);

describe('<HomePage />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context).toMatchSnapshot();
  });
});
