import * as React from 'react';
import { StyleSheet, View, Text, Image, FlatList,Alert,Linking } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { Searchbar } from 'react-native-paper';
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
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
// import { AsyncStorage } from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';
import ipCon from '../ipConfig.json';

export default ProfileScreen = ({navigation, route}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [name, setName] = React.useState('');
    const [store, setStore] = React.useState('');
    const [cat, setCat] = React.useState('');
    const [actualStore, setActualStore] = React.useState('');
    const [medList, setMedList] = React.useState([]);
    const onChangeSearch = query => setSearchQuery(query);

    const fecthByCategory= async()=>{
        console.log(route.params.paramsKey)
        const c = route.params.paramsKey;
        setCat(route.params.paramsKey)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Cat:c})
        };
      
        try {
        await fetch(
           ipCon.ip+'/fetchCatMed', requestOptions)
           .then(res => {
               // console.log(res)
               res.json()
                   .then(data => {
                       console.log(data)
                    
                    if(data.Msg==="No Data"){
                        alert("No Stores.")
                        navigation.push('CategoryScreen')
                    }
                    setMedList(data.Rows)
                    console.log(data.Rows)
                   });
           })
           
        }
        catch (error) {
            console.error(error);
        }
    
    }
   
    useEffect(() => {
        fecthByCategory();
        
      }, []);

    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
            {/* <View style={styles.Main}> */}
            <View style={styles.Header}>
                <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                    <View style={styles.HeaderBody}>
                    <View style={{ padding:10,flexDirection:'row',flex:0.2, alignItems:'flex-end',justifyContent:'flex-start' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
                                <Text style={{fontSize:24,fontWeight:'400'}}> {'<'} </Text>
                        </TouchableOpacity>
                       
                            <Text style= {{fontSize:24, fontWeight:'600',textAlign:'center'}}>Stores</Text>
               
                    </View> 
                    <View style={{flex:0.8,justifyContent:'flex-end',alignItems:'center',top:'-40%'}}>
                        <Text style= {{fontSize:24, fontWeight:'600',textAlign:'center'}}>{actualStore}</Text>
                    </View> 
                    </View>
                </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    <LinearGradient colors={['#007279', '#fff' ]} style={styles.linearGradientBody}>
                        <View style={styles.BodyPadding}>
                        
                        <FlatList
                            data={medList}
                            keyExtractor={(item) => item.Medicine}
                            renderItem={({item}) =>

                                <TouchableOpacity onPress={() => navigation.navigate('FilterCategory',{store:item.Medical,Cat:cat})} style={{padding:5,marginBottom:3, backgroundColor:'#93C1C6'}}>
                                    <Text style={{fontSize:18}}>{item.Medical}</Text>
                                    <Text style={{fontSize:13}}>Tap to View Medicines</Text>
                                </TouchableOpacity>

                            }
                        />
                        
                        </View>
                    </LinearGradient>
                </View>
            </View>
            {/* </View> */}
            
        </View>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    linearGradientBody:{
        flex: 1,
        borderTopRightRadius:26,
        borderTopLeftRadius:26
    },
    linearGradient: {
        flex: 1,
    },
    Main: {
        width:'100%',
        height:'93%',
        backgroundColor:'purple',
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
        height:'75%',
        width:'100%',
        
        
    },
    HeaderBody:{
        flexDirection:'column',
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
        top:'-10%',
        // backgroundColor:'#00747BCF',
        height:'100%',
        width:'90%',
        borderTopLeftRadius:26,
        borderTopRightRadius:26,
        alignSelf:'center'

    },
    Tail: {
        // flex:1,
        width:'100%',
        height:'10%',
        backgroundColor:'#fff'
    },
    Search: {
        marginTop:'2%',
    },
    image1: {
    flex: 1,
    height: null,
    width:'100%',
    resizeMode: 'contain',
    // flex: 1,
    // aspectRatio: .75, 
    // resizeMode: 'contain',
    
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
    },
    box: {
        width: '33.33%',
        // height: '30%',
        padding: 5,
        
    },
    inner: {
        flex: 1,
        backgroundColor: '#fcfcfc',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:23,
    },
    NearestButton: {
        backgroundColor:'#F9A826',
        height:50,
        width: '97%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:26,
        margin:5,
        shadowColor: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    subBody: {
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    },
    bottomNavi: {
        backgroundColor:'#00747B',
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
   icon: {
       color:'black',
   },
   ImageView: {
    width:'30%',
    height:'50%',
    alignItems:'center',
    justifyContent:'center',
   // backgroundColor:'#fff'
},
ImageView2: {
    width:'20%',
    height:'50%',
    alignItems:'center',
    justifyContent:'center',
    //backgroundColor: 'orange',
},
image1: {
    flex: 1,
    height: null,
    width:'100%',
    resizeMode: 'contain',
    // flex: 1,
    // aspectRatio: .75, 
    // resizeMode: 'contain',
    
    },

})