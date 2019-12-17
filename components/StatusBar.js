import React from 'react';
import { AsyncStorage, StyleSheet, View, Button } from 'react-native';
import Colors from '../constants/Colors';
// import userDefaults from 'react-native-user-defaults';

export function StatusBar() {
  return (
    <View style={styles.statusbar}>
      <Button onPress={()=>console.log('test')} color={Colors.statusBarColor} />
    </View>
    );
}

const styles = StyleSheet.create({
    statusbar: {
      backgroundColor: Colors.statusBarColor,
      height: 30,
    },
});

const themeChangeHandler = () => {
  storeData = async () => {
    try {
      console.log('save theme');
      await AsyncStorage.setItem('@theme_mode', 'dark');
    } catch (e) {
      // saving error
    }
  }
}