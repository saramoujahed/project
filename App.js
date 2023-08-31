import { decode, encode } from 'base-64';

// this is a fix for an ATOB error
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
//===

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ShopScreen from './src/screens/ShopScreen';
import BagScreen from './src/screens/BagScreen';
import StoreScreen from './src/screens/StoreScreen';
import AccountScreen from './src/screens/AccountScreen';
import AddProfileScreen from './src/screens/AddProfile';
import SuccessScreen from './src/screens/SuccessScreen';
import MyProfile from './src/screens/MyProfile';

import { Provider as BagProvider } from './src/context/BagContext';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './src/components/theme';

// This line disabled warning pop-ups in Expo
console.disableYellowBox = true;

// Stack Navs
const HomeStack = createStackNavigator();
const ShopStack = createStackNavigator();
const BagStack = createStackNavigator();
const StoreStack = createStackNavigator();
const AccountStack = createStackNavigator();

//Each Stack aligns with a tab on the navigation menu
// New Screens must be added to a stack, with unique name

// Screens under the Home Tab
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
// Screens under the Shop Tab
function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen name="Shop" component={ShopScreen} />
    </ShopStack.Navigator>
  );
}
//Screens under the Bag Tab
function BagStackScreen() {
  return (
    <BagStack.Navigator>
      <BagStack.Screen name="Bag" component={BagScreen} />
      <BagStack.Screen name="Success" component={SuccessScreen} />
    </BagStack.Navigator>
  );
}
//Screens under the Store Tab
function StoreStackScreen() {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen name="Store" component={StoreScreen} />
    </StoreStack.Navigator>
  );
}
//Screens under the Account Tab
function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={AccountScreen} />
      <AccountStack.Screen name="MyProfile" component={MyProfile} />
      <AccountStack.Screen name="AddProfile" component={AddProfileScreen} />
    </AccountStack.Navigator>
  );
}

// App export defined below
// all stacks must be included
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BagProvider>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeStackScreen} />
              <Tab.Screen name="Shop" component={ShopStackScreen} />
              <Tab.Screen name="Bag" component={BagStackScreen} />
              <Tab.Screen name="Store" component={StoreStackScreen} />
              <Tab.Screen name="Account" component={AccountStackScreen} />
            </Tab.Navigator>
          </BagProvider>
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
