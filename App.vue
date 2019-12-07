<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createBottomTabNavigator
} from "vue-native-router";
import HomeScreen from "./screens/HomeScreen.vue";
import PoemsScreen from "./screens/PoemsScreen.vue";
import WorkScreen from "./screens/WorkScreen.vue";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const IOSTabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" size={20} color={tintColor} />
      )
    })
  },
  Poems: {
    screen: PoemsScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-bookmarks" size={20} color={tintColor} />
      )
    })
  },
    Work: {
    screen: WorkScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-briefcase" size={20} color={tintColor} />
      )
    })
  }
}, {
    order: ['Home', 'Poems', 'Work'],
    tabBarOptions: {
      activeTintColor: '#e6a410',
      inactiveTintColor: '#ffffff',
      style: {
        backgroundColor: '#ac252d',
      }
    },
});
const AppNavigator = createAppContainer(IOSTabs);

export default {
  components: {
    AppNavigator
  }
};
</script>