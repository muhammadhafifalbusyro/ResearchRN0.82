import React from 'react'
import {View, Text} from 'react-native'

export default App = () =>{
  return <Text style={{color:'red'}}>hallo</Text>
}

// ====================
//     "react-redux": "^9.1.2",
//   "redux-thunk": "^3.1.0"

// ERROR: TypeError: middleware is not a function

// import React, { useEffect } from 'react';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import { View, Text, Button, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
// import store from './store';
// import { fetchTodos, addTodo } from './store/actions/todoActions';

// function TodoScreen() {
//   const dispatch = useDispatch();
//   const { items, loading, error } = useSelector((state) => state.todo);

//   useEffect(() => {
//     dispatch(fetchTodos());
//   }, [dispatch]);

//   if (loading) return <ActivityIndicator style={{ marginTop: 20 }} />;
//   if (error) return <Text style={{ color: 'red' }}>Error: {error}</Text>;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>📝 Todo List (Redux Thunk)</Text>
//       <FlatList
//         data={items}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <Text style={styles.item}>• {item.title}</Text>}
//       />
//       <Button
//         title="Tambah Todo"
//         onPress={() => dispatch(addTodo('Todo Baru'))}
//       />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <TodoScreen />
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
//   item: { paddingVertical: 4, fontSize: 16 },
// });



//==============================
// "react-native-vision-camera": "^4.6.4" , ERROR: NOT showing anything just blank screen

// import React, { useEffect, useRef, useState } from 'react';
// import { Button, StyleSheet, View, Text } from 'react-native';
// // import { Camera, useCameraDevices } from 'react-native-vision-camera';

// export default function App() {
//   // const [hasPermission, setHasPermission] = useState(false);
//   // const camera = useRef(null);
//   // const devices = useCameraDevices();
//   // const device = devices.back;

//   // useEffect(() => {
//   //   (async () => {
//   //     const status = await Camera.requestCameraPermission();
//   //     setHasPermission(status === 'authorized');
//   //   })();
//   // }, []);

//   // const takePhoto = async () => {
//   //   if (camera.current) {
//   //     const photo = await camera.current.takePhoto();
//   //     console.log('📷 Foto tersimpan di:', photo.path);
//   //   }
//   // };

//   // if (device == null) return <View />;
//   // if (!hasPermission) return <View><Button title="Minta Izin Kamera" onPress={() => {}} /></View>;

//   return (
//     <View style={{ flex: 1 }}>
//       {/* <Camera
//         ref={camera}
//         style={StyleSheet.absoluteFill}
//         device={device}
//         isActive={true}
//         photo={true}
//       /> */}
//       {/* <View style={styles.buttonContainer}>
//         <Button title="Ambil Foto" onPress={takePhoto} />
//       </View> */}
//       <Text style={{color:'red'}}>asdfasd</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 40,
//     alignSelf: 'center',
//   },
// });

// =============================================================================
//  "socket.io": "^2.5.0",
 //   "socket.io-client": "2.5.0" => RUN

// import React, { useEffect, useState } from 'react';
// import { SafeAreaView, TextInput, Button, Text, FlatList, View } from 'react-native';
// import io from 'socket.io-client';

// export default function App() {
//   const [socket, setSocket] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState('');

//   useEffect(() => {
//     // Koneksi ke server publik demo socket.io
//     const newSocket = io('https://socketio-chat-h9jt.herokuapp.com/');
//     setSocket(newSocket);

//     // Event join chat
//     newSocket.emit('add user', 'ReactNativeUser');

//     // Terima pesan
//     newSocket.on('new message', (data) => {
//       setMessages((prev) => [...prev, { user: data.username, message: data.message }]);
//     });

//     return () => newSocket.disconnect();
//   }, []);

//   const sendMessage = () => {
//     if (socket && text.trim()) {
//       socket.emit('new message', text);
//       setText('');
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, padding: 20 }}>
//       <FlatList
//         data={messages}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={{ marginVertical: 5 }}>
//             <Text style={{ fontWeight: 'bold' }}>{item.user}:</Text>
//             <Text>{item.message}</Text>
//           </View>
//         )}
//       />
//       <TextInput
//         placeholder="Ketik pesan..."
//         value={text}
//         onChangeText={setText}
//         style={{
//           borderWidth: 1,
//           borderColor: '#ccc',
//           borderRadius: 8,
//           padding: 10,
//           marginVertical: 10,
//         }}
//       />
//       <Button title="Kirim" onPress={sendMessage} />
//     </SafeAreaView>
//   );
// }


// =============================================================
// "rn-fetch-blob": "^0.12.0" => ERROR
// Build file '/Users/muhammadhafifalbusyro/my_project/TestingProject/node_modules/rn-fetch-blob/android/build.gradle' line: 15

// * What went wrong:
// A problem occurred evaluating project ':rn-fetch-blob'.
// > Could not find method jcenter() for arguments [] on repository container of type org.gradle.api.internal.artifacts.dsl.DefaultRepositoryHandler.

// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';

// export default function App() {
//   const [filePath, setFilePath] = useState('');

//   const requestPermission = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//         {
//           title: 'Izin Penyimpanan',
//           message: 'Aplikasi memerlukan izin untuk menyimpan file ke perangkat Anda',
//           buttonPositive: 'OK',
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const downloadFile = async () => {
//     const hasPermission = await requestPermission();
//     if (!hasPermission) {
//       console.warn('Izin ditolak');
//       return;
//     }

//     const { config, fs } = RNFetchBlob;
//     const dir = fs.dirs.DownloadDir;
//     const filePath = `${dir}/react_logo.png`;

//     config({
//       path: filePath,
//       fileCache: true,
//     })
//       .fetch('GET', 'https://reactnative.dev/img/tiny_logo.png')
//       .then((res) => {
//         console.log('File disimpan di:', res.path());
//         setFilePath(res.path());
//       })
//       .catch((err) => {
//         console.error('Gagal download:', err);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Contoh rn-fetch-blob</Text>
//       <Button title="Download Gambar" onPress={downloadFile} />
//       {filePath ? <Text style={styles.path}>📂 {filePath}</Text> : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   title: { fontSize: 20, marginBottom: 20 },
//   path: { marginTop: 20, fontSize: 14, color: '#555', textAlign: 'center' },
// });



// ===================================
// "react-native-zss-rich-text-editor": "^1.1.0" => ERROR: need web-view-bridge

// import React, { useRef } from 'react';
// import { SafeAreaView, StyleSheet, Button } from 'react-native';
// import { RichTextEditor, RichTextToolbar, actions } from 'react-native-zss-rich-text-editor';

// export default function App() {
//   const richText = useRef();

//   const handleSave = async () => {
//     const html = await richText.current?.getContentHtml();
//     console.log('HTML Output:', html);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <RichTextEditor
//         ref={richText}
//         style={styles.editor}
//         initialTitleHTML="Judul Artikel"
//         initialContentHTML="<p>Tulis artikel kamu di sini...</p>"
//         editorInitializedCallback={() => console.log('Editor siap!')}
//       />

//       <RichTextToolbar
//         getEditor={() => richText.current}
//         selectedButtonStyle={{ backgroundColor: '#EEE' }}
//         iconTint="#222"
//       />

//       <Button title="Simpan Konten" onPress={handleSave} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   editor: {
//     flex: 1,
//     padding: 10,
//   },
// });




// =====================================================
//   "react-native-youtube-iframe": "^2.3.0" => video blank not showing

// import React, { useRef, useState, useCallback } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';

// export default function App() {
//   const playerRef = useRef(null);
//   const [playing, setPlaying] = useState(false);

//   const onStateChange = useCallback((state) => {
//     if (state === 'ended') {
//       setPlaying(false);
//       console.log('Video selesai diputar');
//     }
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>React Native YouTube Example</Text>
//       <YoutubePlayer
//         ref={playerRef}
//         height={230}

//         play={playing}
//         videoId={'0-S5a0eXPoc'} // 🎬 ID video asli: "Introducing React Native"
//         onChangeState={onStateChange}
//       />
//       <Text style={styles.info}>Status: {playing ? 'Playing' : 'Paused'}</Text>
//       <Text
//         style={styles.button}
//         onPress={() => setPlaying((prev) => !prev)}
//       >
//         {playing ? '⏸ Pause' : '▶️ Play'}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 16,
//     fontWeight: 'bold',
//   },
//   info: {
//     marginTop: 16,
//     fontSize: 16,
//   },
//   button: {
//     marginTop: 12,
//     fontSize: 18,
//     color: '#007BFF',
//   },
// });

// =============================================================
// "react-native-wheel-color-picker": "^1.3.1" => RUn

// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ColorPicker from 'react-native-wheel-color-picker';

// export default function App() {
//   const [color, setColor] = useState('#00ff00');

//   const onColorChange = (selectedColor) => {
//     setColor(selectedColor);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={[styles.text, { color }]}>
//         Warna Terpilih: {color}
//       </Text>
//       <ColorPicker
//         color={color}
//         onColorChange={onColorChange}
//         thumbSize={40}
//         sliderSize={40}
//         noSnap={true}
//         row={false}
//       />
//       <View style={[styles.previewBox, { backgroundColor: color }]} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
//   previewBox: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginTop: 30,
//   },
// });




// =====================================================
// "react-native-url-polyfill": "^2.0.0" => RUN


// import 'react-native-url-polyfill/auto'; // 👈 wajib di paling atas
// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

// export default function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         // ✅ buat URL asli dengan parameter dinamis
//         const url = new URL('https://jsonplaceholder.typicode.com/posts');
//         url.searchParams.append('userId', '2');

//         console.log('🔗 URL final:', url.toString());
//         // contoh: https://jsonplaceholder.typicode.com/posts?userId=2

//         const res = await fetch(url.toString());
//         const json = await res.json();
//         setData(json);
//       } catch (err) {
//         console.error('❌ Fetch error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" color="#2196F3" />
//         <Text>Loading posts...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {data.map((item) => (
//         <View key={item.id} style={styles.card}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text>{item.body}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   card: {
//     marginBottom: 12,
//     padding: 12,
//     backgroundColor: '#f5f5f5',
//     borderRadius: 8,
//   },
//   title: { fontWeight: 'bold', fontSize: 16, marginBottom: 6 },
// });


// =================================================================
//"react-native-toast-message": "^2.2.0" => RUN

// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';
// import Toast from 'react-native-toast-message';

// export default function App() {
//   const showSuccess = () => {
//     Toast.show({
//       type: 'success',
//       text1: 'Berhasil 🎉',
//       text2: 'Data kamu berhasil disimpan!',
//     });
//   };

//   const showError = () => {
//     Toast.show({
//       type: 'error',
//       text1: 'Gagal ❌',
//       text2: 'Terjadi kesalahan, coba lagi nanti.',
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="Tampilkan Toast Sukses" onPress={showSuccess} />
//       <View style={{ height: 10 }} />
//       <Button title="Tampilkan Toast Error" onPress={showError} />

//       {/* Komponen Toast WAJIB ada di root */}
//       <Toast />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



// ===================================================
// "react-native-timer-picker": "^1.10.3" => RUN


// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import {TimerPickerModal} from 'react-native-timer-picker';

// export default function App() {
//   const [visible, setVisible] = useState(false);
//   const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//         Selected Time: {`${time.hours}h ${time.minutes}m ${time.seconds}s`}
//       </Text>

//       <Button title="Open Timer Picker" onPress={() => setVisible(true)} />

//       <TimerPickerModal
//         visible={visible}
//         setIsVisible={setVisible}
//         onConfirm={(pickedDuration) => {
//           setTime(pickedDuration);
//         }}
//         onCancel={() => setVisible(false)}
//         modalTitle="Select Duration"
//         initialHours={time.hours}
//         initialMinutes={time.minutes}
//         initialSeconds={time.seconds}
//         styles={{
//           theme: 'dark', // atau 'light'
//           confirmButton: { backgroundColor: '#2196F3' },
//         }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     marginBottom: 20,
//   },
// });



// =========================================
// "react-native-tab-view": "^3.5.2" => ERROR TypeError: 0, _useLatestCallback.default is not a function (it is undefined)
    

// import * as React from 'react';
// import { View, Text, useWindowDimensions } from 'react-native';
// import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// const FirstRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#ff4081', justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Tab Pertama</Text>
//   </View>
// );

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: '#673ab7', justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Tab Kedua</Text>
//   </View>
// );

// export default function App() {
//   const layout = useWindowDimensions();

//   // State untuk index tab dan daftar route
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'Pertama' },
//     { key: 'second', title: 'Kedua' },
//   ]);

//   // Mapping antara key dan komponen
//   const renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//       renderTabBar={(props) => (
//         <TabBar
//           {...props}
//           indicatorStyle={{ backgroundColor: 'white' }}
//           style={{ backgroundColor: '#2196f3' }}
//         />
//       )}
//     />
//   );
// }



// ===================================
//  "react-native-svg-transformer": "^1.5.0" => RUN

// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import BellBlue from './assets/bell-blue.svg'; // ✅ bisa langsung import

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <BellBlue width={100} height={100} fill="gold" />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });




//=================================================
// "react-native-svg": "^15.4.0" => RUN


// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Svg, { Circle, Rect, Line, Polygon, Text } from 'react-native-svg';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Svg height="200" width="200">
//         {/* Lingkaran */}
//         <Circle cx="100" cy="60" r="40" fill="gold" />

//         {/* Persegi */}
//         <Rect x="50" y="120" width="100" height="50" fill="skyblue" stroke="black" strokeWidth="2" />

//         {/* Garis */}
//         <Line x1="0" y1="0" x2="200" y2="200" stroke="red" strokeWidth="2" />

//         {/* Segitiga */}
//         <Polygon points="100,20 40,180 160,180" fill="lime" stroke="green" strokeWidth="2" opacity="0.5" />

//         {/* Teks */}
//         <Text
//           x="100"
//           y="190"
//           fontSize="16"
//           fontWeight="bold"
//           textAnchor="middle"
//           fill="black"
//         >
//           React Native SVG
//         </Text>
//       </Svg>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });




// ===================================================
 // "react-native-star-rating": "^1.1.0" => Error when implementation "Cannot read property 'allowFontScalling' of undefined"

// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import StarRating from 'react-native-star-rating';

// const App = () => {
//   const [rating, setRating] = useState(3); // nilai awal rating

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Penilaian Produk</Text>

//       <StarRating
//         disabled={false}
//         maxStars={5}
//         rating={rating}
//         selectedStar={(newRating) => setRating(newRating)}
//         fullStarColor={'gold'}
//       />

//       <Text style={styles.text}>Rating kamu: {rating} bintang</Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 20,
//     fontWeight: 'bold',
//     color:'red'
//   },
//   text: {
//     marginTop: 15,
//     fontSize: 16,
//   },
// });




//===========================================================================
//"react-native-sse": "^1.2.1" => RUN 

// import React, { useEffect, useState } from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import EventSource from 'react-native-sse';

// const App = () => {
//   const [changes, setChanges] = useState([]);

//   useEffect(() => {
//     const url = 'https://stream.wikimedia.org/v2/stream/recentchange';
//     const headers = {
//       'User-Agent': 'ReactNativeSSEExample/1.0 (https://github.com/yourusername)',
//       'Accept': 'text/event-stream',
//     };

//     const es = new EventSource(url, { headers });

//     es.addEventListener('open', () => {
//       console.log('✅ Connected to Wikipedia SSE');
//     });

//     es.addEventListener('message', (event) => {
//       try {
//         const data = JSON.parse(event.data);
//         setChanges((prev) => [data, ...prev.slice(0, 20)]); // simpan 20 terakhir
//       } catch (error) {
//         console.error('Error parsing message:', error);
//       }
//     });

//     es.addEventListener('error', (event) => {
//       console.error('❌ SSE error:', event);
//       es.close();
//     });

//     return () => {
//       console.log('🛑 Closing SSE...');
//       es.close();
//     };
//   }, []);

//   return (
//     <ScrollView style={{ flex: 1, padding: 16, backgroundColor: '#fafafa' }}>
//       <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
//         Live Wikipedia Recent Changes
//       </Text>

//       {changes.map((item, index) => (
//         <View
//           key={index}
//           style={{
//             backgroundColor: '#fff',
//             marginBottom: 10,
//             padding: 10,
//             borderRadius: 8,
//             shadowColor: '#000',
//             shadowOpacity: 0.1,
//             shadowRadius: 3,
//           }}
//         >
//           <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
//           <Text>{item.user}</Text>
//           <Text style={{ color: 'gray' }}>{item.comment}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default App;



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
