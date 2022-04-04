import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../../components/08-useReducer/todo-app/TodoListItem';
import { demoTodos } from '../../../fixtures/demoTodo';

describe('Testing the <TodoListItem /> component', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      indice={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call the function handleDelete', () => {
    wrapper.find('button').simulate('click');

    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('should call the function handleToggle', () => {
    wrapper.find('p').simulate('click');

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test('should show the text correctly', () => {
    const p = wrapper.find('p').text().trim();
    expect(p).toBe(`1. ${demoTodos[0].desc}`);
  });

  test('should have the class complete if the TODO.done is true', () => {
    const todo = {
      id: 1,
      desc: 'Aprender React',
      done: true,
    };

    const wrapper = shallow(
      <TodoListItem
        todo={todo}
        indice={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
