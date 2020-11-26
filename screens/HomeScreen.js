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
import { Ionicons } from '@expo/vector-icons';

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
        <Card title=' Who am I?'
          titleIcon='ios-happy'
          content='Not always starting from A ends you in Z, sometimes you have to continue with AA and create any word of your own. Though having Graduation of Electrical Engineering I do have skills in Design, Web Development, Electrical repair and Electronics simulation. Out of the box, I write poems, speak quotes and try altering cloud saved data.'
        />
        <View style={styles.card}>
            <Text style={styles.title}>
                <Ionicons name="ios-briefcase" style={styles.titleIcon} /> What I Do?
            </Text>

            <Text style={styles.padding}></Text>

            <Text style={styles.subTitle}>
              Web Developer at View9 | Nepal
            </Text>
            <Text style={styles.subTitle}>
              (Jan 2019 - Present)
            </Text>
            <Text style={styles.content}>
              I develop the backend for website, connect its database to different platforms with api. I also build mini apps on react native.
            </Text>

            <Text style={styles.padding}></Text>

            <Text style={styles.subTitle}>
              Junior Android Developer at Fixolla | India
            </Text>
            <Text style={styles.subTitle}>
              (Feb 2018 - Dec 2018)
            </Text>
            <Text style={styles.content}>
              With their android development team I learnt app development and also developed api.
            </Text>

            <Text style={styles.padding}></Text>

            <Text style={styles.subTitle}>
              Security Analyst at Fixolla | India
            </Text>
            <Text style={styles.subTitle}>
              (Sep 2017 - Feb 2018)
            </Text>
            <Text style={styles.content}>
              As analyst helped the company in scrapping the data from open sources and build their database. I was also offered for public speaking and promotional offers publicity across colleges in Bangalore.
            </Text>

            <Text style={styles.padding}></Text>

            <Text style={styles.subTitle}>
              Service and Sales Engineer at A2Z Laundry Solutions | India
            </Text>
            <Text style={styles.subTitle}>
              (Dec 2016 - Dec 2018)
            </Text>
            <Text style={styles.content}>
              I was involved in laundry business setup, marketing and it growth for dorzens of laundries in India. I am one of the authorised service Engineer for Danube International (France), Pony (Italy) and SEKO (USA). Beside these, I am involved in other brands like Electrolux (Sweden), Maytag (USA), Speedqueen (USA), Hydrosystems (USA), ">SEITZ (Germany) and Sunrise (India).
            </Text>
        </View>
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
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: Colors.bodyColorCard,
    borderRadius: 15,
  },
  title: {
    color: Colors.tintColor,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.tintColor,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  titleIcon: {
    fontSize: 28,
    marginRight: 5,
  },
  content: {
    color: Colors.textColor,
    fontSize: 20,
    textAlign: 'justify',
    marginTop: 10,
  },
  padding: {
    paddingTop: 5,
    paddingBottom: 5,
  }
});
