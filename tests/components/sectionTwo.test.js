import React from 'react';
import { shallow } from 'enzyme';

import SectionTwo from '../../src/components/sectionTwo/sectionTwo.component';

let context;

const createComponent = () => shallow(<SectionTwo />);

describe('<SectionTwo />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context.dive()).toMatchSnapshot();
  });
});
