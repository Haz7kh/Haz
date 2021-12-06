import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen';
import AboutUs from './src/screens/AboutUs';
import CryptoCurrencies from './src/screens/CryptoCurrencies';
import LandingP from './src/screens/LandingP';
import Contact from './src/screens/Contact';
import AddBlogText from './src/screens/AddBlogText';
import CustomCompo from './src/screens/CustomCompo';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutUs,
    CrypF:CryptoCurrencies,
    LandEl:LandingP,
    contactEl:Contact,
    AddBlohE2:AddBlogText,
    ContactE2: CustomCompo,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'MAIN',
    },
  }
);

export default createAppContainer(navigator);
