import React from 'react';
import { Platform, StatusBar as StatusBarImport, StyleSheet, View } from 'react-native';
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
      height: Platform.OS == 'android' ? StatusBarImport.currentHeight : 30,
    },
});