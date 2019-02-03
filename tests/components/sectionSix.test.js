import React from 'react';
import { shallow } from 'enzyme';

import SectionSix from '../../src/components/sectionSix/sectionSix.component';

let context;

const createComponent = () => shallow(<SectionSix />);

describe('<SectionSix />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context.dive()).toMatchSnapshot();
  });
});
