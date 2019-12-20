import React from 'react';
import { AsyncStorage, StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

export function StatusBar() {
  return (
    <View style={styles.statusbar}>
    </View>
    );
}

const styles = StyleSheet.create({
    statusbar: {
      backgroundColor: Colors.statusBarColor,
      height: 30,
    },
});