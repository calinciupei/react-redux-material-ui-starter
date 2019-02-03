import React from 'react';
import { shallow } from 'enzyme';

import SectionFive from '../../src/components/sectionFive/sectionFive.component';

let context;

const createComponent = () => shallow(<SectionFive />);

describe('<SectionFive />', () => {
  context = createComponent();

  it('should render correctly', () => {
    expect(context.dive()).toMatchSnapshot();
  });
});
