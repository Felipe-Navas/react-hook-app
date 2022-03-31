import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('testing the useForm custom hook', () => {
  const initialForm = {
    name: 'Felipao',
    email: 'felipenavas.itec@gmail.com',
  };

  test('should return the initialForm', () => {
    const { result } = renderHook(() => useForm(initialForm));

    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should change the value of the form with the handleInputChange', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Test passed',
        },
      });
    });
    const [formValues, ,] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: 'Test passed' });
  });

  test('should reset the form with the reset function', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Test passed',
        },
      });
      reset();
    });
    const [formValues, ,] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
