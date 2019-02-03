import React from 'react';
import { shallow } from 'enzyme';

import MainTemplate from '../../src/components/mainTemplate/mainTemplate.component';

let context;

const createComponent = () => shallow(<MainTemplate />);

describe('<MainTemplate />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context.dive()).toMatchSnapshot();
  });
});
