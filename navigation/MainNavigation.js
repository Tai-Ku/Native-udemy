import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {Routes} from './Routes';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const MainMenuNavigation = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name={Routes.Home} component={Home} />
//       <Drawer.Screen name={Routes.Profile} component={Profile} />
//     </Drawer.Navigator>
//   );
// };
const MainNavigaton = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home}></Stack.Screen>
      <Stack.Screen name={Routes.Profile} component={Profile}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigaton;
