import React from 'react';
import { shallow } from 'enzyme';

import SectionThree from '../../src/components/sectionThree/sectionThree.component';

let context;

const createComponent = () => shallow(<SectionThree />);

describe('<SectionThree />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context.dive()).toMatchSnapshot();
  });
});
