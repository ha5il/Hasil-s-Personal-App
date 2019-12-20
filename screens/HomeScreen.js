import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { StatusBar } from "../components/StatusBar";
import { Card } from '../components/Card';
import Colors from '../constants/Colors';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/Hasil.png')}
            style={styles.coverImage}
          />
        </View>
        <Text style={styles.poemLine}>Here I am</Text>
        <Text style={styles.poemLine}>A cut above you all</Text>
        <Text style={styles.poemLine}>Silent as a grave</Text>
        <Text style={styles.poemLine}>In favour of your death</Text>
        <Text style={styles.poemLine}>Lethal is my pen</Text>
        <Text style={styles.poemLine}>Perfect would be again</Text>
        <Text style={styles.poemLine}>A fortune is with me</Text>
        <Text style={styles.poemLine}>Unbeatable this shall be</Text>
        <Text style={styles.poemLine}>Dare you come near</Text>
        <Text style={styles.poemLine}>Yell you out there</Text>
        <Text style={styles.poemLine}>And who is this me</Text>
        <Text style={styles.poemLine}>Links the first letters to me</Text>
        <Card title='Who am I?'
          titleIcon='ios-happy'
          content='Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own. Though having Graduation of Electrical Engineering I do have skills in Design, Web Development, Electrical repair and Electronics simulation. Out of the box, I write poems, speak quotes and try altering cloud saved data.'
        />
        <Card title='What I do?'
          titleIcon='ios-briefcase'
          content='I develop the backend of website and connect its database to different platforms with api.'
        />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodyColor,
    flex: 1,
  },
  coverImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  poemLine: {
    textAlign: 'center',
    letterSpacing: 1,
    fontSize: 20,
    color: Colors.textColor,
  }
});
