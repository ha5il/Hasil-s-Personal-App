import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { StatusBar } from "../components/StatusBar";
import Project from "../contents/Projects";
import { Card } from "../components/Card";

export default function ProjectsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={styles.container}>
        {Project.projects.map((project =>
          <Card title={project.name} content={project.tagLine} />
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
    backgroundColor: '#fff',
  },
});
