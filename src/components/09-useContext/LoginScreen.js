import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({ id: 123, name: 'Felipe' });
        }}
      >
        Login
      </button>
    </div>
  );
};
