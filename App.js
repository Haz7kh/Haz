import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutUs from './src/screens/AboutUs';
import SignIn from './src/screens/SignIn';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: SignIn,
    About: AboutUs,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Haz',
    },
  }
);

export default createAppContainer(navigator);
