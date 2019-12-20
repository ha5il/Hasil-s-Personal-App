import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PoemsScreen from '../screens/PoemsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import QuotesScreen from '../screens/QuotesScreen';

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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-book'} />
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
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'} />
  ),
};

ProjectsStack.path = '';

const QuotesStack = createStackNavigator(
  {
    Quotes: QuotesScreen,
  },
  config
);

QuotesStack.navigationOptions = {
  tabBarLabel: 'Quotes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-link'} />
  ),
};

QuotesStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  PoemsStack,
  ProjectsStack,
  QuotesStack,
});

tabNavigator.path = '';

export default tabNavigator;
