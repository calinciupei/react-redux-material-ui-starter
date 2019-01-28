import React from 'react';
import { shallow } from 'enzyme';

import HeaderBar from '../../src/components/headerBar/headerBar.component';

const createComponent = () => shallow(<HeaderBar />);

describe('<HeaderBar />', () => {
  const context = createComponent();

  it('should render correctly', () => {
    expect(context).toMatchSnapshot();
  });
});
