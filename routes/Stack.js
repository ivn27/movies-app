import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/Home';
import MovieDetails from '../screens/MovieDetails';

const screens = {
  Home: {
    screen: Home,
  },
  MovieDetails: {
    screen: MovieDetails,
  },
};

// home stack navigator screens
const Stack = createStackNavigator(screens);

export default createAppContainer(Stack);