import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

configure({ adapter: new Adapter() });

describe('Testing the <AppRouter /> component', () => {
  const user = { name: 'Felipao', email: 'felipenavas.itec@gmail.com' };
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
