import React from 'react';
import { shallow } from 'enzyme';

import FooterBar from '../../src/components/footerBar/footerBar.component';

const createComponent = () => shallow(<FooterBar />);

describe('<FooterBar />', () => {
  const context = createComponent();

  it('should render correctly', () => {
    expect(context).toMatchSnapshot();
  });
});
