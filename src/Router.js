import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {Recently, Search, Subscribe, Post, SearchResults} from './pages';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Recently') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Subscribe') {
            iconName = 'bell';
          } else if (route.name === 'Add') {
            iconName = 'plus-circle';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#FFF',
        activeBackgroundColor: '#1d9b54',
        inactiveTintColor: '#EEE',
        style: {backgroundColor: '#26ae61', height: 55, borderTopWidth: 0},
      }}>
      <Tab.Screen
        name="Recently"
        component={Recently}
        options={{
          tabBarLabel: 'Son Eklenenler',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Arama',
        }}
      />
      <Tab.Screen
        name="Subscribe"
        component={Subscribe}
        options={{
          tabBarLabel: 'Abonelik',
        }}
      />
    </Tab.Navigator>
  );
}

function Router() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1d9b54" barStyle="light-content" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
