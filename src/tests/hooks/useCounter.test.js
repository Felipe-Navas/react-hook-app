import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Testing the useCounter custom hook', () => {
  test('should return default value', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('should return 100', () => {
    const { result } = renderHook(() => useCounter(100));

    expect(result.current.counter).toBe(100);
  });

  test('should increment the counter based on the passed factor', () => {
    const { result } = renderHook(() => useCounter(50));
    const { increment } = result.current;
    act(() => {
      increment(2);
    });
    const { counter } = result.current;
    expect(counter).toBe(52);
  });

  test('should decrement the counter based on the passed factor', () => {
    const { result } = renderHook(() => useCounter(50));
    const { decrement } = result.current;
    act(() => {
      decrement(2);
    });
    const { counter } = result.current;
    expect(counter).toBe(48);
  });

  test('should reset the counter to the first value after a increment', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment(10);
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
