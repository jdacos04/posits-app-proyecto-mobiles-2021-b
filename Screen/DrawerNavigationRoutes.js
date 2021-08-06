// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';
import {TouchableOpacity,Text,}from 'react-native'
// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import TaskFormScreen from './DrawerScreens/TaskFormScreen'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) =>({
          title: 'Posist-APP', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader  navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#64438b', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("TaskFormScreen")}
            >
              <Text style={{ color: "#000000", marginRight: 20, fontSize: 15 }}>
                Crear notas [-|-]
              </Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="TaskFormScreen"
        component={TaskFormScreen}
        options={{
          title: 'Crear ', //Set Header Title
          headerStyle: {
            backgroundColor: '#64438b', //Set Header color
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#a4e547', //Set Header color
        },
        headerTintColor: '#000000', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
    screenOptions={{
        activeTintColor: '#FFFF00',
        color: '#FFFF00',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#ffd248',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Notas'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Configuracion'}}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
