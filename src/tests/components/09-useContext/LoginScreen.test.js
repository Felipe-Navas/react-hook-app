import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

configure({ adapter: new Adapter() });

describe('Testing the <LoginScreen /> component', () => {
  const user = { name: 'Felipao', email: 'felipenavas.itec@gmail.com' };
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  );
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should run the setUser function with the expected parameter', () => {
    const parameters = { id: 123, name: 'Felipe' };

    wrapper.find('button').simulate('click');

    expect(setUser).toHaveBeenCalledWith(parameters);
    expect(setUser).toHaveBeenCalledTimes(1);
  });
});
