<template>
    <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createBottomTabNavigator,
} from "vue-native-router";
import HomeScreen from "./screens/HomeScreen.vue";
import PoemsScreen from "./screens/PoemsScreen.vue";

const IOSTabs = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Poems: {
    screen: PoemsScreen,
    // navigationOptions: () => ({
    //         tabBarIcon: () => (
    //             <image :source=require('../assets/Hasil.png') />,
    //         )
    // })
    },
  }
);
const AppNavigator = createAppContainer(IOSTabs);

export default {
  components: {
    AppNavigator
  }
};
</script>