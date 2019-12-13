import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

export function StatusBar() {
  return (
    <View style={styles.statusbar} />
    );
}

const styles = StyleSheet.create({
    statusbar: {
      backgroundColor: Colors.statusBarColor,
      height: '30px',
    },
});