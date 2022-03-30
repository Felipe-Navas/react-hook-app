import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('Testing the component HooksApp', () => {
  test('should render', () => {
    const wrapper = shallow(<HooksApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
