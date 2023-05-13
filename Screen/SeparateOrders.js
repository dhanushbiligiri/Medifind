import * as React from 'react';
import { StyleSheet, View, Text, Image,FlatList,Alert } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import { useState } from "react";
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconO from 'react-native-vector-icons/Octicons';
import { useEffect } from 'react';
import ipCon from '../ipConfig.json';
import AsyncStorage  from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get('window');
//const [alignItems, setAlignItems] = useState("stretch");
export default MerchantOrders = ({navigation,route}) =>  {
    const [data, setData] = useState();
    const [store, setStore] = useState();
    const [user, setUser] = useState();
    
    const fetchOrders = async (props) => {
        const c  = route.params.Username;
        console.log(c)
        setUser(c)


        const s = await AsyncStorage.getItem('Store');  
        console.log(s);
        setStore(s);
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Username:c,Store:s})
        };
        try {
            await fetch(
                ipCon.ip+"/fetchSeparateOrder", requestOptions)
                .then(res => {
                    res.json()
                        .then(data => {
                            
                            // props.navigation.replace('CustomerLogin')
                            console.log(data)
                            
                            setData(data);
                         
                            
                        });
                })
                
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchOrders();
      },[]);

    return (
        <LinearGradient colors={['#EDA8AE', '#FFFFFF' ]} style={styles.linearGradient}>
            <SafeAreaView>
            <View style={styles.Header}>
                    <LinearGradient colors={['#EDA8AE', '#fff' ]} style={styles.linearGradient}>
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:35, top:'20%', paddingLeft:'5%'  }}>{user}'s Orders</Text>
                            
                        </View>
                    </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    {/* <LinearGradient colors={['#EDA8AE', '#fff' ]} style={styles.linearGradientBody}> */}
                    <FlatList
                            data={data}
                            // keyExtractor={(item,index) => index.toString()}
                            keyExtractor={(item) => item.Medicine}
                            renderItem={({item, index}) =>

                            <TouchableOpacity onPress={() => navigation.navigate('SeparateOrders')} style={{padding:5,marginBottom:3, borderColor:'grey', borderWidth:1, flexDirection:'row'}}>
  
                                    <View style={{padding:2,flex:1, alignItems:'flex-start', justifyContent:'center',flexDirection:'column'}}>
                                        <Text style={{color:'black', fontWeight:'bold'}}>{item.Qty} x {item.Medicine}</Text>
                                       
                                    </View>
                                </TouchableOpacity>
                            
                                

                            }

                        />
                        {/* <TouchableOpacity onPress={() => validateLogin(props)}>
                            <View style={styles.Login} >
                            <Text style={{fontSize:19, color:'#FFFFFF'}}>Delete</Text>
                            </View>
                        </TouchableOpacity> */}
                        
                    {/* </LinearGradient> */}
                </View>
            </View>
              {/* <View style={styles.Tail}>
                <View style={styles.bottomNavi}>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantDashboard')}>
                      <IconI size={24} color="black" name="home-outline" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantOrders')}>
                      <IconO size={24} color="white" name="stack"  />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantCategory')}>
                      <IconM size={24} color="black" name="category" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantProfile')}>
                      <IconI size={24} color="black" name="person-outline" />
                  </TouchableOpacity>
                  </View>
              </View> */}
              
            </SafeAreaView>
      </LinearGradient>
    )
  }
  
  const styles =StyleSheet.create({
    linearGradientBody:{
        flex: 1,
        // borderTopRightRadius:26,
        // borderTopLeftRadius:26
    },
    linearGradient: {
        flex: 1,
    },
    Header: {
        width:'100%',
        height:'25%',
        // flex:1,
        // backgroundColor:'#010101'
    },
    HeaderFlex: {
        flex:1,
        flexDirection:'column',
        padding:'3%',
        
    },
    Body: {
        // flex:4,
        backgroundColor:'#fff',
        // padding:'3%',
        height:'75%',
        width:'100%',
        
        
    },
    BodyLayout: {
        // marginLeft:'10%',
        // marginRight:'10%',
        top:'-10%',
        // backgroundColor:'#00747BCF',
        height:'100%',
        width:'90%',
        borderTopLeftRadius:26,
        borderTopRightRadius:26,
        alignSelf:'center'

    },
    Login:{
        backgroundColor: "black",
        width: width/2.25,
        height: 50,
        borderRadius: 22,
        left:100,
        alignItems:'center',
        justifyContent:'center'
    },
    Tail: {
      height:'10%',
      width: '100%',
      backgroundColor:'#eee'
    },
    // loc: {
      
    // },
    bottomNavi: {
      backgroundColor:'#D35E5E',
      height:50,
      width: '97%',
      alignItems:'center',
      justifyContent:'space-evenly',
      borderRadius:26,
      margin:5,
      // padding:10,
      top:5,
      flexDirection:'row',
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
        
  })


