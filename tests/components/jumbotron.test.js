import React from 'react';
import { shallow } from 'enzyme';

import Jumbotron from '../../src/components/jumbotron/jumbotron.component';

let context;
let props = {
  classes: {
    jumbotron: 'Jumbotron-jumbotron-1',
    mainText: 'Jumbotron-mainText-3',
    textField: 'Jumbotron-textField-2'
  }
};

describe('<Jumbotron />', () => {
  context = shallow(<Jumbotron {...props} />);

  it('should render correctly', () => {
    expect(context.dive()).toMatchSnapshot();
  });
});
