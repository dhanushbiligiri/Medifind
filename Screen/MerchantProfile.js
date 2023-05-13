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
import Image1 from '../assets/Pictures/image1.png'
import imageProfile from '../assets/Pictures/imageProfile.png'
import { ScrollView } from 'react-native';
import imageEditProfile from '../assets/Pictures/imageEditProfile.png';
import myOrders from '../assets/Pictures/myOrders.png';
import myAdresses from '../assets/Pictures/myAdresses.png';
import needHelp from '../assets/Pictures/needHelp.png';
import termsConditions from '../assets/Pictures/termsConditions.png';
import changePassword from '../assets/Pictures/changePassword.png';
import logout from '../assets/Pictures/logout.png';
import profileBtn from '../assets/Pictures/profileBtn.png';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { useEffect } from 'react'; 
const {width, height} = Dimensions.get('window');

  


export default MerchantProfile = ({navigation}) =>  {
  const [merch,setMerch] = React.useState("");
  const nam= async ()=>{
    // console.log(route.params.store)
    var c = await AsyncStorage.getItem('Merchant');  
    
    // c = c.replace(/_/g," ");
    console.log(c)
    setMerch(c)
  }
  
  useEffect(() => {
    nam();
    
  }, []);
    return (
            <SafeAreaView>
              <View style={styles.Header}>
              <LinearGradient colors={['#FFC0CB', '#FFFFFF' ]} style={styles.linearGradient}>
              <View style={styles.ImageView}>
                            <Image source={imageProfile} />
                            </View> 
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:20 , color:'black'}}>{merch}</Text>
                            {/* <Text style={{fontSize:15 , color:'black'}}>69696969696969</Text> */}
                        </View>
                        <View style={styles.ImageView2}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('MerchantEditprofile')}>
                            <Image source={imageEditProfile} />
                        </TouchableOpacity> */}
                        </View>
                </LinearGradient>
                </View>
                {/* <View style={styles.HeaderBody}>
                <View style={styles.loc}>
                <Text>nnwinic</Text>
                <IconE size={24}  name="location-pin" />
                </View>
              </View> */}
              <View style={styles.SubHeader}></View>
              <View style={styles.Body}>
              <View style={styles.BodyLayout}>
                    <LinearGradient colors={['#EDA8AE', '#fff' ]} style={styles.linearGradientBody}>
                        <View style={styles.BodyPadding}>
                        <View style={styles.BodyItemsPadding}>
                        <TouchableOpacity onPress={() => navigation.navigate('MerchantOrders')}>
                            <Image source={myOrders} />
                        </TouchableOpacity>    
                        </View>
                        <View style={{borderBottomColor: 'black',borderBottomWidth: 1, }} />
                        {/* <View style={styles.BodyItemsPadding}>
                        <TouchableOpacity>
                            <Image source={myAdresses} />
                        </TouchableOpacity>
                        </View>
                        
                        <View style={styles.BodyItemsPadding}>
                        <TouchableOpacity>
                            <Image source={needHelp} />
                        </TouchableOpacity>
                        </View>
                        <View style={styles.BodyItemsPadding}>
                        <TouchableOpacity>
                            <Image source={termsConditions} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.BodyItemsPadding}>
                        <TouchableOpacity>
                            <Image source={changePassword} />
                        </TouchableOpacity>
                        </View> */}
                        <View style={styles.BodyItemsPadding}>
                        <TouchableOpacity onPress={() => navigation.navigate('MerchantLogin')}>
                            <Image source={logout} />
                            </TouchableOpacity>
                        </View>
                        </View>
                    </LinearGradient>
                </View>
              </View>
              <View style={styles.Tail}>
                <View style={styles.bottomNavi}>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantDashboard')}>
                      <IconI size={24} color="black" name="home-outline" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantOrders')}>
                      <IconO size={24} color="black" name="stack"  />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantCategory')}>
                      <IconM size={24} color="black" name="category" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MerchantProfile')}>
                      <IconI size={24} color="white" name="person-outline" />
                  </TouchableOpacity>
                  </View>
              </View>
              
            </SafeAreaView>
     
    )
  }
  
  const styles =StyleSheet.create({
    // linearGradient:{    
    //     flex: 1,
    //       },
    // Header: {
    //   height:'15%',
    //   width:'100%',
    //   // backgroundColor:'#eee'
    // },
    SubHeader: {
      height:'30%',
      width: '100%',
      backgroundColor:'#fff'
    },
    // Body: {
    //   height:'45%',
    //   width:'100%',
    //   backgroundColor:'#aaa'
    // },
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
  linearGradientBody:{
    flex: 1,
    borderTopRightRadius:26,
    borderTopLeftRadius:26
},
linearGradient: {
  flex: 1,
},
Header: {
  width:'100%',
  height:'25%',
  //flexDirection:'row',
  // alignItems:'center',
  justifyContent:'center',
  // flex:1,
  // backgroundColor:'#010101'
  
},
Body: {
  // flex:4,
  backgroundColor:'#fff',
  // padding:'3%',
  height:'35%',
  width:'100%',
},
HeaderBody:{
  flexDirection:'row',
  top: '4%',
  width:'100%',
  height:'100%',
},
BodyPadding:{
  padding:'5%',
},
BodyItemsPadding:{
  padding:'5%',
  //color : '#a9a9a9',
},
BodyLayout: {
  // marginLeft:'10%',
  // marginRight:'10%',
  top:'-85%',
  // backgroundColor:'#00747BCF',
  height:'100%',
  width:'90%',
  borderTopLeftRadius:26,
  borderTopRightRadius:26,
  alignSelf:'center'

},
HeaderFlex: {
  //flex:1,
  //backgroundColor: 'purple',
  width:'50%',
  height:'50%',
  flexDirection:'column',
  padding:'3%',
  alignItems:'flex-start',
  justifyContent:'center',
  marginLeft:'31%',
  top:'-30%',
},
ImageView: {
  width:'30%',
  height:'50%',
  alignItems:'center',
  justifyContent:'center',
  top:'20%',
  marginLeft:'3%',
 // backgroundColor:'#fff'
},
ImageView2: {
  width:'20%',
  height:'50%',
  alignItems:'center',
  justifyContent:'center',
  //backgroundColor: 'orange',
  marginLeft:'75%',
  top:'-85%',
},
        
  })


