import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { act } from '@testing-library/react-hooks';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { AboutScreen } from '../../../components/09-useContext/AboutScreen';

configure({ adapter: new Adapter() });

describe('Testing the <AboutScreen /> component', () => {
  const user = { name: 'Felipao', email: 'felipenavas.itec@gmail.com' };
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <AboutScreen />
    </UserContext.Provider>
  );

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
