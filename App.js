import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutUs from './src/screens/AboutUs';
import CryptoCurrencies from './src/screens/CryptoCurrencies';
import LandingP from './src/screens/LandingP';
import Contact from './src/screens/Contact';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutUs,
    CrypF:CryptoCurrencies,
    LandEl:LandingP,
    contactEl:Contact,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Haz',
    },
  }
);

export default createAppContainer(navigator);
