import React from 'react';
import { mount, shallow, configure } from 'enzyme';
// import { act } from '@testing-library/react-hooks';
import {act} from 'react-dom/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TodoApp } from '../../../../components/08-useReducer/todo-app/TodoApp';
import { demoTodos } from '../../../fixtures/demoTodo';

configure({ adapter: new Adapter() });

describe('Testing the <TodoApp />', () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should add a new Todos', () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('should delete a Todo', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');

    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
  });
});
