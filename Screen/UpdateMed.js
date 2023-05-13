import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { useState } from "react";
import ipCon from '../ipConfig.json'
import AsyncStorage  from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');





export default UpdateMed = ({navigation,props,route}) =>  {
    const [Name,setName] = React.useState("");
    const [Price,setPrice] = React.useState("");
    const [Qty,setQty] = React.useState("");
    const [Category,setCategory] = React.useState("");


    const add = async (props) => {
        var c = await AsyncStorage.getItem('Store');  
    
        // c = c.replace(/_/g," ");
        // console.log(c)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name:Name, Qty:Qty,Store:c  })
        };
        try {
            await fetch(
                ipCon.ip+"/updateMedToStock", requestOptions)
                .then(res => {
                    res.json()
                        .then(data => {
                            
                            // props.navigation.replace('CustomerLogin')
                            console.log(data.Msg)
                            
                            const response = data.Msg;
                            if(response==="Updated to Stock")
                            {
                                alert("Medicine updated to Stock")
                                setName()
                                setQty()
                            }
                            
                        });
                })
                
        }
        catch (error) {
            console.error(error);
        }
    }

    const validateMed = async (props) => {
        console.log("Validate")
        if(Name.length === 0){
            alert("Name can't be empty" );
        }else if(Qty.length === 0){
            alert("Quantity can't be empty" );
        }else{
            // let user = await AsyncStorage.setItem('Store');  
            // console.log(user)
            add(props)
        }
    }
    

    return (
        <LinearGradient colors={['#FFB6C1', '#FFFFFF' ]} style={styles.linearGradient}> 
        <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('MerchantDashboard')}>
                            <Text style={styles.Back}> {'<'} </Text>
                            </TouchableOpacity>
            <View style={styles.Text}>
            <Text style={styles.Meditext}>Update stock</Text>
            </View>
            <View style={styles.inputview}>
            <TextInput style={styles.textinput}
                backgroundColor='#F9E2E4'
                label="Product Name"
                value={Name}
                onChangeText={Name => setName(Name)}/>
            <TextInput 
                backgroundColor='#F9E2E4'
                label="Product Stock"
                value={Qty}
                onChangeText={Qty => setQty(Qty)}/>
           
       
            </View>
     
           
           
            {/* </View> */}
            <TouchableOpacity onPress={() => validateMed(props)}>
            <View style={styles.SignupRect} >
                <Text style={{fontSize:19, color:'#FFFFFF'}}>Add</Text>
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
        justifyContent:'center',
        alignItems:'center',
        // height:'30%',
        width:'100%',
        // top:'1%',
        
        //backgroundColor: '#FFF'
    },

    Meditext:{
        fontSize:25,
        left:'-15%',
        // top:'%'
    },

    inputview:{
        paddingTop:100,
        padding:5,
        flexDirection:'column',

    },

    textinput:{
        width: '100%',
        height: 70,
        borderRadius: 22,
        margin:1,
    },

    terms:{
        left:'5%',
        justifyContent:'center',
        alignItems:'center',
        height:30, 
    },

    SignupRect:{
        backgroundColor: "#476A7D",
        width: width/2.25,
        height: 50,
        borderRadius: 22,
        top:20,
        left:100,
        alignItems:'center',
        justifyContent:'center'
    },
    Back:{
        left:'5%',
        top:'100%',
        justifyContent:'center',
        alignItems:'center',
        height:30, 
        fontSize:28
    },
   


})