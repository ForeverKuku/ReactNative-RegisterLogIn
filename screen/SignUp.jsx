import { StatusBar } from "expo-status-bar";
import { TextInput, Icon } from "react-native-paper";
import { View, Text, TouchableOpacity, StyleSheet, Button} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from "react";
// import { Component } from 'react';
import { useNavigation } from "@react-navigation/native";



export  const  SignUp =  () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <StatusBar style="auto" />
            <Image source={require('../assets/picture2.jpg')} style={styles.registerLogo} />
            <View style={styles.form}>
                <Text style={styles.loginWord}>Register</Text>
                <TextInput
                    style={styles.username}
                    mode="flat"
                    underlineColor="white"
                    placeholder="Username"
                    placeholderTextColor={'#B8B7C0'}
                />
                <TextInput
                    style={styles.email}
                    mode="flat"
                    underlineColor="white"
                    placeholder="Email"
                    placeholderTextColor={'#B8B7C0'}
                />
                <TextInput
                    style={styles.password}
                    mode="flat"
                    underlineColor="white"
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor={'#B8B7C0'}
                />
                <TouchableOpacity style={styles.submitTouch} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.submitLogin}>Register</Text>
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
    );
};


 const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    registerLogo: {
        width: '100%',
        height: 315,
    },


    form: {
        //backgroundColor: 'cyan',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
    },
    loginWord: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    username: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '2%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        borderBottomWidth: 0,
        height: 50,
        marginTop: 10,
    },
    userIcon: {
        backgroundColor: '#FDE8EA', 
        marginLeft: '30%',
    },
    email: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '2%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        borderBottomWidth: 0,
        height: 50,
    },
    eamilIcon: {
        backgroundColor: '#DEF4E8', 
        marginLeft: '30%',
    },
    password: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingLeft: '2%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 30,
        borderBottomWidth: 0,
        height: 50,
    },
    passwordIcon: {
        backgroundColor: '#E6ECFC', 
        marginLeft: '30%',
    },
    submitTouch:{
        backgroundColor: '#191A30',
        width: '100%',
        height: 50,
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    submitLogin: {
        color: 'white',
        fontSize: 17,
    },

    bottomIcons: {
        marginTop: 50,
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fbTouch: {
        width: '15%',
        height: 50,
        alignItems: 'center',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
    },
    fb: {
        color: '#216CD3',
        fontSize: 30,
    },
    google: {
        width: '75%',
        height: '75%',
    },
    apple: {
        color: '#15131E',
        fontSize: 30,
    },
})