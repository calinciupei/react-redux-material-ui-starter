import React from 'react';
import { shallow } from 'enzyme';

import SectionFour from '../../src/components/sectionFour/sectionFour.component';

let context;

const createComponent = () => shallow(<SectionFour />);

describe('<SectionFour />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context.dive()).toMatchSnapshot();
  });
});
