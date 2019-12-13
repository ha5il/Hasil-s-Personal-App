import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PoemsScreen from '../screens/PoemsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const PoemsStack = createStackNavigator(
  {
    Poems: PoemsScreen,
  },
  config
);

PoemsStack.navigationOptions = {
  tabBarLabel: 'Poems',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

PoemsStack.path = '';

const ProjectsStack = createStackNavigator(
  {
    Projects: ProjectsScreen,
  },
  config
);

ProjectsStack.navigationOptions = {
  tabBarLabel: 'Projects',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ProjectsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  PoemsStack,
  ProjectsStack,
});

tabNavigator.path = '';

export default tabNavigator;
