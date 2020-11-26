import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { StatusBar } from "../components/StatusBar";
import { CardPoem } from '../components/Card';
import Poems from '../contents/Poems';
import Colors from '../constants/Colors';

export default function PoemsScreen() {
  return (
    <View style={{flex: 1}}>
    <StatusBar />
      <ScrollView style={styles.container}>
      {Poems.poems.map((poem =>
        <CardPoem title={poem.name} key={poem.id} paras={poem.poemParas} />
        ))}
      </ScrollView>
    </View>
  );
}

PoemsScreen.navigationOptions = {
  // title: 'Poems',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.bodyColor,
  }
});
