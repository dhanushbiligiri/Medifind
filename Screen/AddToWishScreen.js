import * as React from 'react';
import { StyleSheet, View, Text, Image,FlatList,Alert,Input } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { Button, Searchbar } from 'react-native-paper';
import Image1 from '../assets/Pictures/image1.png'
import Cart from '../assets/Pictures/Cart.png'
import { ScrollView } from 'react-native';
import imageCovid from '../assets/Pictures/imageCovid.png';
import imageCritical from '../assets/Pictures/imageCritical.png';
import imageNeeds from '../assets/Pictures/imageNeeds.png';
import imageNearest from '../assets/Pictures/imageNearest.png';
import homeBtn from '../assets/Pictures/homeBtn.png';
import heartBtn from '../assets/Pictures/heartBtn.png';
import categoriesBtn from '../assets/Pictures/categoriesBtn.png';
import profileBtn from '../assets/Pictures/profileBtn.png';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconA from 'react-native-vector-icons/AntDesign';
import ipCon from '../ipConfig.json';
import { TextInput } from 'react-native-paper';
import { useState,useEffect } from 'react';

export default WishlistScreen  = ({navigation}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [data, setData] = useState([]);
    const [dataAva, setDataAva] = useState([]);
    const [Med,setMed] = React.useState("");
   
    const fetchData= async()=>{
        const response = await fetch(ipCon.ip+"/wishlist");
        // const response = await fetch('https://raw.githubusercontent.com/Hardeepcoder/fake_json/master/Users');
        
        const users = await response.json();
        if(users)
        setData(users);
    }

    const fetchAvailable= async()=>{
        const responseAva = await fetch(ipCon.ip+"/wishlistAvailable");
        const wishAva = await responseAva.json();
        if(wishAva) setDataAva(wishAva);
        console.log("first")
    
    }

    


    const  addtoWishlist = async () => {
        console.log(Med)
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name:Med})
        };
        try {
            await fetch(
               ipCon.ip+'/addToWishlist', requestOptions)
               .then(res => {
                   // console.log(res)
                   res.json()
                       .then(data => {
                           
                           // props.navigation.replace('CustomerLogin')
                           console.log("data")
                           const response = data.Msg;
                            if(response === "Added to cart"){
                                alert("Added to cart")
                                navigation.push('WishlistScreen');
                                setMed('')
                            }
                            
                           
                       });
               })
               
       }
       catch (error) {
           console.error(error);
       }
    }


   
    

    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
            {/* <View style={styles.Main}> */}
                <View style={styles.Header}>
                    <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:35, top:'10%', paddingLeft:'3%'  }}>Add to Wishlist</Text>
                            
                        </View>

                    </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    <LinearGradient colors={['rgba(0, 114, 121, 0.61)', '#fff' ]} style={styles.linearGradientBody}>
                        
                    <TextInput 
                        backgroundColor='#02767D'
                        label="Medicine Name"
                        value={Med}
                        onChangeText={Med => setMed(Med)}/>

                        <TouchableOpacity onPress={() => addtoWishlist()} style={{marginTop:60,height:'10%',width:'30%',backgroundColor:'#02767D',alignSelf:'center',borderRadius:24,alignItems:'center',justifyContent:'center'}}>
                        <View >
                        <Text style={{fontSize:24, paddingLeft:'3%'  }}>Add</Text>
                        </View>
                        </TouchableOpacity>
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
                    <IconF5 size={24} color="white" name="heart"  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <IconI size={24} color="black" name="person-outline" />
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
        borderTopLeftRadius:26,
        paddingTop:40,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'column',
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
    BodyLayout: {
        // marginLeft:'10%',
        // marginRight:'10%',
        top:'-10%',
        // backgroundColor:'#00747BCF',
        height:'100%',
        width:'90%',
        borderTopLeftRadius:26,
        borderTopRightRadius:26,
        alignSelf:'center',
        padding:5

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
        flex:1,
        flexDirection:'row',
        padding:'3%',
        alignContent:'center',
        // justifyContent:'center'
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
   }

})
