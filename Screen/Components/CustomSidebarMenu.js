// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View >
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {'['.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>Posits-APP</Text>
        <Text style={{fontSize: 25, color: '#307ecc'}}>
            {']'.charAt(0)}
          </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => <Text style={{color: '#d8d8d8'}}>Cerrar sesion</Text>}
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Cerrar sesion',
              'Seguro de ue quieres cerrar sesion?',
              [
                {
                  text: 'Cancelar',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Aceptar',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('Auth');
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3f1e67',
    paddingTop: 40,
    color: 'white',
    
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#64438b',
    padding: 15,
    textAlign: 'center',
    borderRadius:20
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#000000',
    marginTop: 15,
  },
});
