import { StatusBar } from "expo-status-bar";
import { TextInput, Icon } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, FontAwesome } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native";

  const  LoginScreen = () => {
  const navigation = useNavigation();
return(
  <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <StatusBar style="auto" />
      <Image source={require('../assets/picture3.jpg')} style={styles.loginLogo} />

      <View style={styles.loginDiv}>
        <Text style={styles.loginWord}>Login</Text>
        <TextInput
          style={styles.username}
          mode="flat"
          underlineColor="white"
          placeholder="Username"
          placeholderTextColor={'#B8B7C0'}
          left={<TextInput.Icon name="account-outline" color='#F6A035'/>}
        />
        <TextInput
          style={styles.password}
          mode="flat"
          underlineColor="white"
          secureTextEntry
          placeholder="Password"
          placeholderTextColor={'#B8B7C0'}
          left={<TextInput.Icon name="lock-outline" color='#A09EF3'/>}
        />

        <View style={styles.submit}>
          <TouchableOpacity style={styles.forgotpassTouch}>
            <Text style={styles.forgotpass}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitTouch} onPress={() => navigation.navigate("HomePage")}>
                    <Text style={styles.submitLogin}>SignIn</Text>
                </TouchableOpacity>
        </View>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity onPress={() => {/* Handle Facebook login */}}>
              <FontAwesome name="facebook" size={30} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {/* Handle Google login */}}>
              <FontAwesome name="google" size={30} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {/* Handle Apple login */}}>
              <AntDesign name="apple1" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
);
};

 export const styles=  StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLogo: {
    width: '90%',
    height: 120, 
    resizeMode: 'contain', 
  },
  loginDiv: {
    backgroundColor: 'black',
    width: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  loginWord: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  username: {
    width: '100%',
    marginTop: 10,
    backgroundColor: 'white',
  },
  password: {
    width: '100%',
    marginTop: 10,
    backgroundColor: 'white',
  },
  submit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  forgotpassTouch: {},
  forgotpass: {
    color: '#818FFC',
  },
  submitTouch: {
    backgroundColor: '#1A1C33',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  submitLogin: {
    color: 'white',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
  },
});

export default LoginScreen;