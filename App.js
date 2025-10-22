import React from "react";
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {WebView} from 'react-native-webview'

const App = () => {
  return (
    <View style={{flex:1 }}>
      <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
    </View>
  )
}

export default App

// ======================================================================================================================

//   "react-native-webview": "^13.12.3" => RUN 

// import React from "react";
// import {View, Text} from 'react-native'
// import Icon from 'react-native-vector-icons/Feather'
// import {WebView} from 'react-native-webview'

// const App = () => {
//   return (
//     <View style={{flex:1 }}>
//       <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />
//     </View>
//   )
// }

// export default App



// ======================================================================================================================

//"react-native-vector-icons": "^9.2.0" => RUN with notes

//react-native-vector-icons package has moved to a new model of per-icon-family packages. See the https://github.com/oblador/react-native-vector-icons/blob/master/MIGRATION.md on how to migrate


// import React from "react";
// import {View, Text} from 'react-native'
// import Icon from 'react-native-vector-icons/Feather'

// const App = () => {
//   return (
//     <View style={{flex:1 }}>
//       <Text style={{color:'red'}}>Hallo</Text>
//       <Icon name="home"/>
//     </View>
//   )
// }

// export default App


// =======================================================================================================================
 // "react-native-splash-screen": "^3.3.0" => ERROR


//  Error npm run android after npm install pacakge: msg => duplicate class ....

// ==========================================================================================================================
// "react-native-sortable-list": "^0.0.25" => ERROR

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React, {useCallback, useEffect, useMemo, useRef} from 'react';
// import {
//   Animated,
//   Image,
//   StyleSheet,
//   Text,
//   Platform,
//   Easing,
//   View,
//   Dimensions,
// } from 'react-native';
// import SortableList from 'react-native-sortable-list'; //<= error import : Cannot read property 'style; of undefined

// const window = Dimensions.get('window');

// const data = {
//   0: {
//     image: 'https://placekitten.com/200/240',
//     text: 'Chloe',
//   },
//   1: {
//     image: 'https://placekitten.com/200/201',
//     text: 'Jasper',
//   },
//   2: {
//     image: 'https://placekitten.com/200/202',
//     text: 'Pepper',
//   },
//   3: {
//     image: 'https://placekitten.com/200/203',
//     text: 'Oscar',
//   },
//   4: {
//     image: 'https://placekitten.com/200/204',
//     text: 'Dusty',
//   },
//   5: {
//     image: 'https://placekitten.com/200/205',
//     text: 'Spooky',
//   },
//   6: {
//     image: 'https://placekitten.com/200/210',
//     text: 'Kiki',
//   },
//   7: {
//     image: 'https://placekitten.com/200/215',
//     text: 'Smokey',
//   },
//   8: {
//     image: 'https://placekitten.com/200/220',
//     text: 'Gizmo',
//   },
//   9: {
//     image: 'https://placekitten.com/220/239',
//     text: 'Kitty',
//   },
// };

// function Row(props) {
//   const {active, data} = props;

//   const activeAnim = useRef(new Animated.Value(0));
//   const style = useMemo(
//     () => ({
//       ...Platform.select({
//         ios: {
//           transform: [
//             {
//               scale: activeAnim.current.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [1, 1.07],
//               }),
//             },
//           ],
//           shadowRadius: activeAnim.current.interpolate({
//             inputRange: [0, 1],
//             outputRange: [2, 10],
//           }),
//         },

//         android: {
//           transform: [
//             {
//               scale: activeAnim.current.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: [1, 1.07],
//               }),
//             },
//           ],
//           elevation: activeAnim.current.interpolate({
//             inputRange: [0, 1],
//             outputRange: [2, 6],
//           }),
//         },
//       }),
//     }),
//     [],
//   );
//   useEffect(() => {
//     Animated.timing(activeAnim.current, {
//       duration: 300,
//       easing: Easing.bounce,
//       toValue: Number(active),
//       useNativeDriver: true,
//     }).start();
//   }, [active]);

//   return (
//     <Animated.View style={[styles.row, style]}>
//       <Image source={{uri: data.image}} style={[styles.image]} />
//       <Text style={styles.text}>{data.text}</Text>
//     </Animated.View>
//   );
// }

// const App = () => {
//   const renderRow = useCallback(({data, active}) => {
//     return <Row data={data} active={active} />;
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>React Native Sortable List</Text>
//       {/* <SortableList
//         style={styles.list}
//         contentContainerStyle={styles.contentContainer}
//         data={data}
//         renderRow={renderRow}
//       /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#eee',
//     ...Platform.select({
//       ios: {
//         paddingTop: 20,
//       },
//     }),
//   },
//   title: {
//     fontSize: 20,
//     paddingVertical: 20,
//     color: '#999999',
//   },
//   list: {
//     flex: 1,
//   },
//   contentContainer: {
//     width: window.width,
//     ...Platform.select({
//       ios: {
//         paddingHorizontal: 30,
//       },
//       android: {
//         paddingHorizontal: 0,
//       },
//     }),
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 16,
//     height: 80,
//     flex: 1,
//     marginTop: 7,
//     marginBottom: 12,
//     borderRadius: 4,
//     ...Platform.select({
//       ios: {
//         width: window.width - 30 * 2,
//         shadowColor: 'rgba(0,0,0,0.2)',
//         shadowOpacity: 1,
//         shadowOffset: {height: 2, width: 2},
//         shadowRadius: 2,
//       },
//       android: {
//         width: window.width - 30 * 2,
//         elevation: 0,
//         marginHorizontal: 30,
//       },
//     }),
//   },
//   image: {
//     width: 50,
//     height: 50,
//     marginRight: 30,
//     borderRadius: 25,
//   },
//   text: {
//     fontSize: 24,
//     color: '#222222',
//   },
// });

// export default App;

// ===============================================================================================

// "react-native-smooth-pincode-input: 1.0.9" => ERROR

// import React from 'react'
// import {View, Text} from 'react-native'
// import SmoothPinCodeInput from 'react-native-smooth-pincode-input'; // <= error import : Cannot read property 'style; of undefined


// const App = () => {

//   //   const [code, setCode] = useState('');
//   // const pinInput = useRef(null);
  
//   return (
//     <View style={{flex: 1}}>
//       <Text style={{color:'red'}}>haha</Text>
//     </View>
//   )
// }
// export default App

// =====================================================================================================

//"react-native-snap-carousel": "^3.9.1" => ERROR

// import React, { useRef, useState } from 'react';
// import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel'; //<= error import : Cannot read property 'style; of undefined

// const { width: screenWidth } = Dimensions.get('window');

// export default function App() {
//   const carouselRef = useRef(null);

//   const [banners] = useState([
//     { id: '1', image: 'https://picsum.photos/id/1015/400/250', title: 'Banner 1' },
//     { id: '2', image: 'https://picsum.photos/id/1016/400/250', title: 'Banner 2' },
//     { id: '3', image: 'https://picsum.photos/id/1018/400/250', title: 'Banner 3' },
//   ]);

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.card}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <Text style={styles.title}>{item.title}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>React Native Snap Carousel 🎠</Text>

//       <Carousel
//         ref={carouselRef}
//         data={banners}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.8}
//         layout="default"
//         autoplay={true}
//         loop={true}
//         autoplayInterval={3000}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 22,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#f5f5f5',
//     borderRadius: 12,
//     overflow: 'hidden',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: 180,
//   },
//   title: {
//     fontSize: 16,
//     paddingVertical: 10,
//   },
// });
