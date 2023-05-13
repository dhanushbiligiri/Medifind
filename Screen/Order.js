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
    const [time, setTime] = React.useState('');
    const [actualStore, setActualStore] = React.useState('');
    const [orderList, setOrderList] = React.useState([]);
    const onChangeSearch = query => setSearchQuery(query);

    // const fetchName= async ()=>{

    //     try{
    //         let user = await AsyncStorage.getItem('user');  
    //         console.log(user)
    //         let parsed = JSON.parse(user);  
    //         const name1 = parsed.name;
    //         console.log("user")
    //         console.log((name1))
    //         setName(name1)
    //         console.log("first")
    //         console.log(route.params.paramKey)
    //     } catch (error) {
    //         // Error retrieving data
    //         console.log(error)
    //     }
    // }  

    // const maps= async ()=>{
    //     console.log(store)
    //     const actualName = store.replace(/_/g, ' ');
    //     console.log(actualName)
    // }

    const fetchStore= async ()=>{

        try{
            setName(route.params.paramKey)
            let st = await AsyncStorage.getItem('Store');  
            console.log(st)
            // let parsed = JSON.parse(st);  
            // const name1 = parsed.name;
            console.log("Store")
            console.log(name)
            setStore(st)
            const actualName = st.replace(/_/g, ' ');
            console.log(actualName)
            setActualStore(actualName)
        
        } catch (error) {
            // Error retrieving data
            console.log(error)
        }
    }  
    const fetchOrders= async ()=>{  
            let user = await AsyncStorage.getItem('user'); 
            console.log(user)
            let parsed = JSON.parse(user);  
            const name1 = parsed.name; 
            // console.log(st)
            // const actualName = st.replace(/_/g, ' ');
            // console.log(actualName)
            // setActualStore(actualName)
        
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Name:name1})
            };
          
            try {
            await fetch(
               ipCon.ip+'/orderRetrive', requestOptions)
               .then(res => {
                   // console.log(res)
                   res.json()
                       .then(data => {
                           console.log(data)
                        
                        if(data){
                        setOrderList(data.Rows)
                        console.log(data.Rows[0].Time)
                        setTime(data.Rows[0].Time)
                        console.log(orderList)
                        }
                       });
               })
               
            }
            catch (error) {
                console.error(error);
            }
        }
        
    
    // const [min, setmin] = useState(30)
    // const [timerCount, setTimer] = useState(60)

    // useEffect(() => {
    //     if(min!==0){
    //     let interval = setInterval(() => {
    //     setTimer(lastTimerCount => {
    //         lastTimerCount <= 1 && clearInterval(interval)
    //         console.log(lastTimerCount)
    //         if(lastTimerCount===1){
    //             let minute = min -1;
    //             setmin(minute)
    //             setTimer(60)
    //         }
    //         return lastTimerCount - 1
    //     })
    //     }, 1000) //each count lasts for a second
    //     //cleanup the interval on complete
        
    //     return () => clearInterval(interval)
    // }
    // }, []);

    
    useEffect(() => {
        // fetchName();
        fetchStore();
        fetchOrders();
        
      },[]);
    

    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
            {/* <View style={styles.Main}> */}
            <View style={styles.Header}>
                <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                    <View style={styles.HeaderBody}>
                    <View style={{ padding:10,flexDirection:'row',flex:0.2, alignItems:'flex-end',justifyContent:'flex-start' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                                <Text style={{fontSize:24,fontWeight:'400'}}> {'<'} </Text>
                        </TouchableOpacity>
                       
                            <Text style= {{fontSize:24, fontWeight:'600',textAlign:'center'}}>Order Details</Text>
               
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
                        {/* <View style={styles.buttonContainer}>
                <Button title="Map" onPress={() => {
                    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=india`)
                }} color="" />
            </View> */}
                        {/* <Text>{min}:{timerCount}</Text> */}
                        <TouchableOpacity onPress={() => {Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${actualStore}`)}} >
                        <Text style={{fontSize:24,paddingBottom:20,fontWeight:'500'}}>Open Google Maps to navigate</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:20,fontWeight:'800'}}>Reservation TimeOut: {time}</Text>
                        <Text style={{fontSize:20,fontWeight:'800'}}>Order List</Text>
                        <FlatList
                            data={orderList}
                            keyExtractor={(item) => item.Medicine}
                            renderItem={({item}) =>

                            <View style={{padding:5,marginBottom:3}}>
                                <Text style={{fontSize:18}}>{item.Qty} x {item.Medicine}</Text>
                                </View>
                            }
                        />
                            
                        
                        </View>
                    </LinearGradient>
                </View>
            </View>
            {/* </View> */}
            <View style={styles.Tail}>
             
            <View style={styles.bottomNavi}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <IconI size={24} color="black" name="home-outline" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('WishlistScreen')}>
                    <IconF5 size={24} color="black" name="heart"  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <IconI size={24} color="white" name="person-outline" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
                    <IconM size={24} color="black" name="category" />
                </TouchableOpacity>
                </View>
            </View>
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
        height:'65%',
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