import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Keyboard,
  Dimensions,
  View,
  Text
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { useRouting } from './router.js';

const windowDimensions = Dimensions.get('window').width - (20 * 2);

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






      