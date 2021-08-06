// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component

import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Layout from "../Components/Layout";

import TaskList from "../Components/TasksList";


const HomeScreen = () => {
  return (
    
      <Layout>
        <TaskList />
      </Layout>
  )
  };
    


export default HomeScreen;
