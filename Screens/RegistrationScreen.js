import { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardShown, setKeyboardShown] = useState(false);

  Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShown(true);
    });
  Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShown(false);
    });

  const [fontsLoaded] = Font.useFonts({
    'Roboto': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto Medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf')
  });
  
  const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
  }, [fontsLoaded]);


  const onRegSubmit = () => {
    Keyboard.dismiss();
    console.log(login, email, password);
    setLogin("");
    setEmail("");
    setPassword("");
  }

  const handleLogin = (text) => {
    setLogin(text);
  }

  const handleEmail = (text) => {
    setEmail(text);
  }

  const handlePassword = (text) => {
    setPassword(text)
  }

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

    if (!fontsLoaded) {
        return null;
    }
  
  return (
      
    <View onLayout={onLayoutRootView} style={styles.container}>
      <TouchableWithoutFeedback onPress={(hideKeyboard)}>
        <ImageBackground source={require("../assets/images/bg2x.jpg")} style={styles.bgImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
          






              <View style = {styles.authContainer} >
              <View style={styles.avatarThumb}></View>
              <Text style={styles.authTitle}>Регистрация</Text>
              
              
                <TextInput style={styles.authInput} placeholder={'Логин'} onChangeText={handleLogin} value={login} />
              <TextInput style={styles.authInput} placeholder={'Адрес электронной почты'} onChangeText={handleEmail} value={email} />
              <TextInput style={styles.authInput} placeholder={'Пароль'} secureTextEntry={true} onChangeText={handlePassword} value={password} />
              
              {!keyboardShown && <><TouchableOpacity style={styles.submitButton} onPress={onRegSubmit}>
                <Text style={styles.submitButtonText}>Зарегистрироваться</Text>
              </TouchableOpacity><TouchableOpacity style={styles.authLink} onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.authLinkText}>Уже есть аккаунт? Войти</Text>
                </TouchableOpacity></>}
              
          </View >
          



          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
    



             )
}


const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#fff',
    // minHeight: 720,
    // paddingBottom: 32,
  },

  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    
  },

  authContainer: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 'auto',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25, 
    paddingBottom: 32,
  },

  avatarThumb: {
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 8,
    marginTop: -60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  authTitle: {
    fontFamily:"Roboto Medium",
    textAlign: 'center',
    marginVertical: 16,
    letterSpacing: 0.01,
    fontSize: 36,
  },


  authInput: {
    marginTop: 16,
    marginHorizontal: 16,
    padding: 16,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    
  },

  submitButton: {
    height: 50,
    backgroundColor: "#FF6C00",
    color: "#fff",
    borderRadius: 100,
    marginHorizontal: 16,
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  submitButtonText: {
    fontSize: 16,
    color: "#fff",
  },

  authLink: {

    marginTop: 6,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: "auto",
    marginRight: "auto"
    
  },

  authLinkText: {
    fontFamily: "Roboto",
    fontSize: 16,
  },

});
