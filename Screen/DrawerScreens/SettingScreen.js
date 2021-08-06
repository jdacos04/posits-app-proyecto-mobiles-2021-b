// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView,Image} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/TYewlOKxANR4s/giphy.gif',
        }} />
        <Image style={{  width: 400, height: 300,}} source={{
          uri:
            'https://media.giphy.com/media/Ph0kgTa6RfKibF8qDT/giphy.gif',
        }} />
      </View>
          <Text 
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            meme
          </Text>
        
    </SafeAreaView>
  );
};

export default SettingsScreen;
