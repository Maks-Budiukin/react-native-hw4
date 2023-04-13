import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Keyboard,
  Dimensions,
  View,
  Text
} from 'react-native';

// import { RegistrationScreen } from './Screens/RegistrationScreen.js';
// import { LoginScreen } from './Screens/LoginScreen.js';
// import { CommentsScreen } from './Screens/CommentsScreen.js';
// import  CreatePostsScreen  from './Screens/CreatePostsScreen.js';
// import { Home } from './Screens/Home.js';
// import { MapScreen } from './Screens/MapScreen.js';
// import { PostsScreen } from './Screens/PostsScreen.js';
// import { ProfileScreen } from './Screens/ProfileScreen.js';


import { NavigationContainer } from '@react-navigation/native';
import { useRouting } from './router.js';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const AuthStack = createNativeStackNavigator();
// const MainTab = createBottomTabNavigator();

const windowDimensions = Dimensions.get('window').width - (20 * 2);



// const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (<AuthStack.Navigator initialRouteName="Registration">
//         <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} /> 
//         <AuthStack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen}/>
//       </AuthStack.Navigator>)
//   }
//   return (<MainTab.Navigator>
//         <MainTab.Screen name="Posts" component={PostsScreen} />
//         <MainTab.Screen name="CreatePosts" component={CreatePostsScreen} />
//         <MainTab.Screen name="Profile" component={ProfileScreen}/>
//       </MainTab.Navigator>)

// }



export default function App() {

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
  });

  const routing = useRouting(true)

  return (
    
    <NavigationContainer>
      
      {routing}
       
    </NavigationContainer>      

           
  );
}






      