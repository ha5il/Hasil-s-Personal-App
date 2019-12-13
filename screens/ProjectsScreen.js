import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import { StatusBar } from "../components/StatusBar";

export default function ProjectsScreen() {    
    return (
      <View>
      <StatusBar />
      <Text>Projects</Text>
    </View>
  );
}

ProjectsScreen.navigationOptions = {
  // title: 'Projects',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
