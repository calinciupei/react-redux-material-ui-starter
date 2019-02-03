import React from 'react';
import { shallow } from 'enzyme';

import SectionOne from '../../src/components/sectionOne/sectionOne.component';

let context;

const createComponent = () => shallow(<SectionOne />);

describe('<SectionOne />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context.dive()).toMatchSnapshot();
  });
});
