import React from 'react';
import { shallow } from 'enzyme';
import { ExampleRef } from '../../../components/04-useRef/ExampleRef';

describe('Testing the <ExampleRef /> component', () => {
  const wrapper = shallow(<ExampleRef />);
  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('should render the component <MultipleCustomHooks /> when click the button', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
