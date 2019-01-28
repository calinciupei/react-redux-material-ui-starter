import React from 'react';
import { shallow } from 'enzyme';

import Jumbotron from '../../src/components/jumbotron/jumbotron.component';

let context;
let props = {
  classes: {}
};

const createComponent = props => shallow(<Jumbotron className={props.classes} />);

describe('<Jumbotron />', () => {
  context = createComponent(props);

  it('should render correctly', () => {
    expect(context).toMatchSnapshot();
  });
});
