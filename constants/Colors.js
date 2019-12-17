import { AsyncStorage } from "react-native";

const primaryColor = '#ac252d';
const tintColor = '#e6a410';
var bodyColorCard = '#ddd';

// getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@theme_mode')
//     if(value !== null) {
//       // value previously stored
//       bodyColorCard = '#fff';
//     } else {
//       bodyColorCard = '#000';
//     }
//   } catch(e) {
//     // error reading value
//     bodyColorCard = '#fff';
//   }
//   console.log('---');
//   console.log(bodyColorCard);
// }
export default {
  bodyColor: '#fdf7ff',
  bodyColorCard: bodyColorCard,
  statusBarColor: primaryColor,
  textColor: primaryColor,
  tintColor,
  tabIconDefault: primaryColor,
  tabIconSelected: tintColor,
};
