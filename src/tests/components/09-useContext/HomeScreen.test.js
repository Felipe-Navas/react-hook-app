import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

configure({ adapter: new Adapter() });

describe('Testing the <HomeScreen /> component', () => {
  const user = { name: 'Felipao', email: 'felipenavas.itec@gmail.com' };
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  );

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
