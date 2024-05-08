import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Testing the custom hook useFetch', () => {
  test('should return the default data', () => {
    const { result } = renderHook(() =>
      useFetch('https://reqres.in/api/users?page=2')
    );

    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('should return the correct data, loading and error from the URL', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://reqres.in/api/users?page=2')
    );
    await waitForNextUpdate({ timeout: 5000 });
    console.log(result.current)
    const { data, loading, error } = result.current;
    expect(data.data.length).toBeGreaterThan(0);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('should return an error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://reqres.in/apiErr/users?page=2')
    );
    await waitForNextUpdate({ timeout: 5000 });
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo obtener la informacion');
  });
});

//  https://reqres.in/api/users?page=2
