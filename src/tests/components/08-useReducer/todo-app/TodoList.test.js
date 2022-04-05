import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../../components/08-useReducer/todo-app/TodoList';
import { demoTodos } from '../../../fixtures/demoTodo';

describe('Testing the <TodoList /> component', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have the same lenght of elements for the <TodoListItem /> components', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
    expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(
      expect.any(Function)
    );
  });
});
