import React from 'react';
import { shallow } from 'enzyme';

import AboutUs from '../../../src/pages/AboutUs/aboutUs.component';

let context;

const createComponent = () => shallow(<AboutUs />);

describe('<AboutUs />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context).toMatchSnapshot();
  });
});
