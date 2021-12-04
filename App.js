import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutUs from './src/screens/AboutUs';
import CryptoCurrencies from './src/screens/CryptoCurrencies';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutUs,
    CrypF:CryptoCurrencies,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Haz',
    },
  }
);

export default createAppContainer(navigator);
