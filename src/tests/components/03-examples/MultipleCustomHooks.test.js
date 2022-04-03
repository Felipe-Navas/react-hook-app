import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Testing over the <MultipleCustomHooks /> component', () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 2,
      increment: () => {},
      decrement: () => {},
      reset: () => {},
    });
  });

  test('should render', () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should show the info in the component', () => {
    const author = 'Felipao';
    const quote = 'Si no sabés, no preguntes';
    useFetch.mockReturnValue({
      data: [{ author, quote }],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    // The method find allows to find into the html content of the component
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.quote').text().trim()).toBe(quote);

    // Find the element <footer></footer>
    expect(wrapper.find('footer').text().trim()).toBe(author);

    expect(wrapper.find('.blockquote-footer').text().trim()).toBe(author);
  });
});
