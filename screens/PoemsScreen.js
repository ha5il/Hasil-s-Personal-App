import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { StatusBar } from "../components/StatusBar";
import { Card } from '../components/Card';
// import Poems from '../contents/Poems';
// import { List, ListItem } from 'react-native'

export default function PoemsScreen() {    
    return (
      <View>
      <StatusBar />
      <Text>Poems</Text>
      {/* <ScrollView style={styles.container}>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((l) => (
      <ListItem
      roundAvatar
      avatar={{uri:l.avatar_url}}
      key={l.name}
      title={l.name}
      />
      ))
    }
  </List>      </ScrollView> */}
    </View>
  );
}

// const list = [
//   {
//     name: 'Amy Farha',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//     subtitle: 'Vice President'
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//     subtitle: 'Vice Chairman'
//   },
// ];

// function poemsList() {
//   return (
//   <Card title='Who am I?'
//     titleIcon='ios-happy'
//     content="asdasdasdas"
//   />
//   );
// }

PoemsScreen.navigationOptions = {
  // title: 'Poems',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
