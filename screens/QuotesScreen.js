import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import { StatusBar } from "../components/StatusBar";
import Quote from "../contents/Quotes";
import { CardQuote } from "../components/Card";
import Colors from '../constants/Colors';

export default function QuotesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={styles.container}>
        {Quote.quotes.map((quote =>
          <CardQuote content={quote.quoteLines} />
        ))}
      </ScrollView>
    </View>
  );
}

QuotesScreen.navigationOptions = {
  // title: 'Quotes',
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.bodyColor,
  },
});
