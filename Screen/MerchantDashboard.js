import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
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
import AsyncStorage  from '@react-native-async-storage/async-storage';


//const [alignItems, setAlignItems] = useState("stretch");



export default MerchantDashboard = ({navigation,route}) =>  {
  const [store, setStore] = React.useState('');
  const name= async()=>{
    // console.log(route.params.store)
    var c = await AsyncStorage.getItem('Store');  
    
    c = c.replace(/_/g," ");
    setStore(c)
  }
  
  useEffect(() => {
    name();
    
  }, []);
    return (
        <LinearGradient colors={['#FFC0CB', '#FFFFFF' ]} style={styles.linearGradient}>
            <SafeAreaView>
              <View style={styles.Header}>
                <View style={styles.loc}>
                <IconE size={30}  name="location-pin" />
                <Text style={{fontSize:16}}>Bellandur</Text>
                </View>
              </View>
              <View style={styles.SubHeader}>
                <View style={styles.SH}>
              {/* <Text style={{ backgroundColor: 'red', flex: 1, textAlignVertical: 'center', textAlign: 'center' }}> ICON 1</Text> */}
              <TouchableOpacity style={{backgroundColor:'white', width:'100%', height:'30.33%',  borderRadius:12,marginBottom:5,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:20,fontWeight:'700'}}>{store}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('InsertMed',{store:store})} style={{backgroundColor:'#49A8FF', width:'100%', height:'30.33%',borderRadius:12,marginBottom:5,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:20,fontWeight:'300'}}>ADD TO STORE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('UpdateMed',{store:store})} style={{backgroundColor:'#FF0000', width:'100%', height:'30.33%',borderRadius:12,marginBottom:5,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:20,fontWeight:'300'}}>UPDATE STOCK</Text>
              </TouchableOpacity>
              
              </View>
              </View>
              <View style={styles.Body}>
              <View style={{ flexDirection: 'row', height:'50%',padding:10,paddingTop:15}}>
              <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <Text style={{textAlign:'center', justifyContent:'center'}}> Total Sales</Text>
              </View>
              <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <Text style={{textAlignVertical: 'center', textAlign: 'center'}}> Total Sales</Text>
              </View>
          </View>

              <View style={{flexDirection: 'row',height:'50%',padding:10}}>
              <View style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <Text style={{ textAlignVertical: 'center', textAlign: 'center'}}> Add offers</Text>
              </View>
              <View style={{alignItems:'center',justifyContent:'center',backgroundColor: 'lightblue',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <Text style={{textAlignVertical: 'center', textAlign: 'center' }}>Add something here</Text>
              </View>
              
          </View>
              </View>
              <View style={styles.Tail}>
                <View style={styles.bottomNavi}>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantDashboard')}>
                      <IconI size={24} color="white" name="home-outline" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantOrders')}>
                      <IconO size={24} color="black" name="stack"  />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantCategory')}>
                      <IconM size={24} color="black" name="category" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantProfile')}>
                      <IconI size={24} color="black" name="person-outline" />
                  </TouchableOpacity>
                  </View>
              </View>
              
            </SafeAreaView>
      </LinearGradient>
    )
  }
  
  const styles =StyleSheet.create({
    linearGradient:{    
        flex: 1,
          },
    Header: {
      height:'15%',
      width:'100%',
      flexDirection:'row',
      alignItems:'flex-end',
      padding:'2%',
      // backgroundColor:'#eee'
    },
    SubHeader: {
      height:'30%',
      width: '94%',
      backgroundColor:'rgba(255, 108, 108, 0.2)',
      borderRadius:18,
      padding:5,
      alignSelf:'center',
      marginLeft:3
      
      // padding:7,
      
      // alignItems:'center',
      // justifyContent:'center'
    },
    Body: {
      height:'45%',
      width:'97%',
      // backgroundColor:""
      alignSelf:'center',
      
    },
    Tail: {
      height:'10%',
      width: '100%',
      // backgroundColor:'#eee'
    },
     loc: {
        flexDirection:'row',
        alignItems:'flex-end',
        marginLeft:5,

     },
    bottomNavi: {
      backgroundColor:'#D35E5E',
      height:50,
      width: '94%',
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'space-evenly',
      borderRadius:26,
      margin:5,
      marginLeft:6,
      top:5,
      flexDirection:'row',

  },
  SH:{
    justifyContent:'space-evenly',
    flexDirection:'column',
    padding:10,
    
    // paddingBottom:5    
  },
        
  })


