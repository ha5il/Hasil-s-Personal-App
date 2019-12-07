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
// import { Ionicons } from "@expo/vector-icons";

// {
//     order: ['Home', 'Poems'],
//     tabBarOptions: {
//       activeTintColor: '#D4AF37',
//       inactiveTintColor: 'gray',
//       style: {
//         backgroundColor: 'white',
//       }
//     },
//   }

const IOSTabs = createBottomTabNavigator({
  Home: {
    screen: HomeScreen
  },
  Poems: {
    screen: PoemsScreen,
    // navigationOptions: () => ({
    //   tabBarIcon: () => (
    //     <Ionicons name="md-checkmark-circle" size={32} color="green" />
    //   )
    // })
  }
});
const AppNavigator = createAppContainer(IOSTabs);

export default {
  components: {
    AppNavigator
  }
};
</script>