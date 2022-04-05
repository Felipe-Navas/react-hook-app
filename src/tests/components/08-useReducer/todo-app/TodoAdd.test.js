import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../../components/08-useReducer/todo-app/TodoAdd';

describe('Testing the <TodoAdd /> component', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should not call the handleAddTodo function', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('should call the handleAddTodo function with the parameter', () => {
    const value = 'Aprender a programar';
    wrapper
      .find('input')
      .simulate('change', { target: { value, name: 'description' } });
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      desc: value,
      done: false,
      id: expect.any(Number),
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
