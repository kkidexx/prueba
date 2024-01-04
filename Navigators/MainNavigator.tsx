
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from '../screens/WelcomeScreen';
import UsuarioScreen from '../screens/RegistroScreen';
import EmpleadoScreen from '../screens/EmpleadoScreen';
import RegistroProductosScreen from '../screens/Screen3';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';



const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registro" component={UsuarioScreen} />
      <Tab.Screen name="Screen2" component={Screen2}/>
      <Tab.Screen name="editar eliminar" component={Screen3}/>
      <Tab.Screen name="api ropa" component={EmpleadoScreen}/>
   
      




    </Tab.Navigator>
  );
}

function MyStack() {
    return (
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        

      </Stack.Navigator>
    );
  }


export default function TopTabNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
} 