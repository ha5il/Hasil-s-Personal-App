import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { StatusBar } from "../components/StatusBar";
import Project from "../contents/Projects";
import { CardProject } from "../components/Card";
import Colors from '../constants/Colors';

export default function ProjectsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={styles.container}>
        {Project.projects.reverse().map((project =>
          <CardProject project={project} key={project.id} />
        ))}
      </ScrollView>
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
    backgroundColor: Colors.bodyColor,
  },
});
