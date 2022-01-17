import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/* Screens */
import DetailScreen from './source/components/Details';
import HomeScreen from './source/components/ListElements';
import ActionsScreen from './source/components/ActionsPokemon';

const App = createStackNavigator({
  POKEDEX: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailScreen
  },
  Movements: {
    screen: ActionsScreen
  }
}, { initialRouteName: 'POKEDEX' });

export default createAppContainer(App);