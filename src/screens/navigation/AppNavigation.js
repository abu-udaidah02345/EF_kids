import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../auth/Login';
import VerifyAccount from '../auth/VerifyAccount';
import Home from '../home/Home';
import Alphapet from '../home/Alphapet';
import Drawing from '../home/Drawing';
import SavePlant from '../../profile/SavePlant';
import KidOrParent from '../../profile/KidOrParent';
import AddKids from '../../profile/AddKids';
import Dashboard from '../parentspanel/Dashboard';
import Addkids from '../parentspanel/Addkids';
import Selectkid from '../parentspanel/Selectkid';

const Stack = createStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Dashboard" component={Dashboard}/>
      <Stack.Screen name="KidOrParent" component={KidOrParent}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
      <Stack.Screen name="Drawing" component={Drawing}/>
      <Stack.Screen name="Alphapet" component={Alphapet} />
      <Stack.Screen name="SavePlant" component={SavePlant}/>
      <Stack.Screen name="AddKids" component={AddKids}/>
      <Stack.Screen name='add' component={Addkids}/>
      <Stack.Screen name='Selectkid' component={Selectkid}/>
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>

    </NavigationContainer>
  );
}