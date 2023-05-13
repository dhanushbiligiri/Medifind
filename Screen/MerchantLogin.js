import * as React from 'react';
import { StyleSheet, View, Text, Image,Alert } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { useState } from "react";
import ipCon from '../ipConfig.json';
import AsyncStorage  from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');



export default CustomerLogin = ({navigation,props}) =>  {
    const [Name,setName] = React.useState("");
    const [Password,setPassword] = React.useState("");
    const [StoreName,setStoreName] = React.useState("");
    // const _storeData = async () => {
    //     try {
    //         let obj = {  
    //             store: StoreName,
    //           }  
    //       AsyncStorage.setItem('Store',JSON.stringify(obj));  
           
    //     } catch (error) {
    //         // Error saving data
    //     }

    // }


    const login = async (props) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name:Name, Password:Password})
        };
        try {
            await fetch(
                ipCon.ip+"/merchantLogin", requestOptions)
                .then(res => {
                    res.json()
                        .then(data => {
                            
                            // props.navigation.replace('CustomerLogin')
                            console.log(data)
                            const response = data.Msg;
                            const name2 = data.Name;
                            const stt = data.st;
                            setName(name2);
                            setStoreName(stt)
                            
                            if(response === "Not Authenticated"){
                                Alert.alert('Invalid user!',"Username or Password is Wrong. Try again.")
                                
                            }
                            else{
                                
                                AsyncStorage.setItem('Store',stt);  
                                AsyncStorage.setItem('Merchant',name2);  
                                Alert.alert("Login Successfully!!");
                                navigation.push('MerchantDashboard',{store:stt});
                                setName('')
                                setPassword('')
                            }
                        });
                })
                
        }
        catch (error) {
            console.error(error);
        }
    }

    const validateLogin = async (props) => {
        console.log("ergver");
        console.log(ipCon.ip);
        if(Name.length === 0){
            alert("Name can't be empty" );
        }else if(Password.length === 0){
            alert("Password can't be empty" );
        }else if(Password.length < 8){
            alert("Password must be 8 characters");
        }else{
            // let user = await AsyncStorage.setItem('Store');  
            // console.log(user)
            login(props)
        }
    }

    return (
      <LinearGradient colors={['#FFB6C1', '#FFFFFF' ]} style={styles.linearGradient}>
          <SafeAreaView>
          <View style={styles.Medi}>
            <Text style={styles.Meditext}>Medifind</Text>
            </View>
            <View style={styles.Text}>
            <TextInput style={styles.TextInput}
                backgroundColor='#D2F7FF'
                label="Name"
                value={Name}
                onChangeText={Name => setName(Name)}/>
            </View>
            <View style={styles.Text} >
            <TextInput style={styles.TextInput}
                backgroundColor='#F9E2E4'
                label="Password"
                value={Password}
                onChangeText={Password => setPassword(Password)}/>
            </View>
            <TouchableOpacity onPress={() => validateLogin(props)}>
            <View style={styles.Login} >
                <Text style={{fontSize:19, color:'#FFFFFF'}}>Login</Text>
            </View>
            </TouchableOpacity>
          </SafeAreaView>
      </LinearGradient>
    )
  }

  const styles =StyleSheet.create({
    linearGradient:{
        flex: 1,

    },

    Text:{
        padding:5,
        flexDirection:'column',
        align:'center',
        justifyContent:'center',
        top:200
    },

    TextInput:{
        width: '100%',
        height: 70,
        borderRadius: 75,
        margin:5,
       
        
    },

    Login:{
        backgroundColor: "#476A7D",
        width: width/2.25,
        height: 50,
        borderRadius: 22,
        top:300,
        left:100,
        alignItems:'center',
        justifyContent:'center'
    },

    Meditext:{
        fontSize:36,
        alignItems:'center',
        justifyContent:'center'
    },

    Medi:{
        zIndex:2,
        alignItems:"center",
        top:height/5,
    },
  })