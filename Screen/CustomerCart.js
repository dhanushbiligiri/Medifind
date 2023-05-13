import * as React from 'react';
import { StyleSheet, View, Text, Image, FlatList,Alert } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { Searchbar } from 'react-native-paper';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import ipCon from '../ipConfig.json';
import Image1 from '../assets/Pictures/image1.png'
import { useState,useEffect } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';

export default CustomerCart = ({navigation}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [cartData, setCartData] = useState([]);
    const [amount, setAmount] = useState('0');
    const [medStore, setMedStore] = useState('');
    const [ex , setEp] =useState('Sep 2023');
    const [name , setName] =useState('');
    

    const fetchCartData= async ()=>{

        try{
            let user = await AsyncStorage.getItem('user');  
            console.log(user)
            let parsed = JSON.parse(user);  
            const name1 = parsed.name;
            console.log((name1))
            setName(name1)
        
        } catch (error) {
            // Error retrieving data
            console.log(error)
        }
        
        const responseCart = await fetch(ipCon.ip+"/cart");
        const cart = await responseCart.json();
        // console.log(cart)
        if(cart.Msg === "Null"){
            alert("Cart is empty")
        }
        else{
        const med = cart.Rows[0].StoreName;
        
        console.log("thord")
        console.log(cart.Total)
        if(cart){
             setCartData(cart.Rows);
             setMedStore(med)
             setAmount(cart.Total)
        }
    }
    
    }

    const placeOrder= async()=>{

        Alert.alert(
            'Alert',
            "Do you want to place the order?",
            [
              { text: 'Cancel', onPress: () => { }, style: 'cancel' },
              {
                text: 'OK', onPress: async () => {
                  //Filter Data 
                  const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ Order:cartData,Name:name})
                };
                try {
                    console.log("entered")
                    await fetch(
                       ipCon.ip+'/checkOut', requestOptions)
                       .then(res => {
                           // console.log(res)
                           res.json()
                               .then(data => {
                                   console.log(data)
                                   if(data.Msg === "Placed"){
                                    AsyncStorage.setItem('Store',medStore); 
                                    navigation.push('PlacedOrder');
                                   }
                                   setCartData([]);
                                   setAmount("0");
                                   setMedStore('');
                               });
                       })
                       
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
            },
          ]) 
    
    }
    const decrease = async (med,store) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name:med,Store:store,Work:"-"})
        };
        try {
             await fetch(
                ipCon.ip+'/increaseMed', requestOptions)
                .then(res => {
                    // console.log(res)
                    res.json()
                        .then(data => {
                            
                            // props.navigation.replace('CustomerLogin')
                            if(data.Msg==="Null"){
                                setCartData()
                                alert("Cart is empty")
                            }else{

                            console.log("data")
                            console.log(data.Rows[0].Qty)
                            setCartData(data.Rows);
                            setAmount(data.Total)
                            }
                        });
                })
                
        }
        catch (error) {
            console.error(error);
        }
    }

    const increase = async (med,store) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name:med,Store:store,Work:"+"})
        };
        try {
             await fetch(
                ipCon.ip+'/increaseMed', requestOptions)
                .then(res => {
                    // console.log(res)
                    res.json()
                        .then(data => {
                            
                            // props.navigation.replace('CustomerLogin')
                            console.log("data")
                            // console.log(data.Rows[0].Quantity)
                            if(data.Msg==="Limit"){
                                setCartData(data.Rows);
                                setAmount(data.Total);
                                alert("Medicine Stock Limit Reached.")
                            }
                            console.log(data.Msg)
                            setCartData(data.Rows);
                            setAmount(data.Total)
                        });
                })
                
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCartData();
    }, []);
    

    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
            {/* <View style={styles.Main}> */}
            <View style={styles.Header}>
                <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                    <View style = {{flexDirection : "row", paddingTop : "10%",paddingLeft:"5%"}}>
                    
                        <View style={{flex : 0.1, top:"-1%"}}>
                            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                                <Text style={styles.Back}> {'<'} </Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{flex : 0.9}}>
                            <Text style={{fontSize:20
                                 , color:'black'}}>Cart</Text>
                            <Text style={{fontSize:15 , color:'black'}}>home, Bangalore, 560103</Text>
                        </View>
                
                </View>
                </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                <Text style={{paddingBottom:5,fontSize:28,paddingLeft:5,fontWeight:'bold'}}>{medStore}</Text>
                <LinearGradient colors={['rgba(0, 114, 121, 0.61)', '#fff' ]} style={styles.linearGradientBody}>
                        <FlatList
                            data={cartData}
                            keyExtractor={(item) => item.Medicine}
                            renderItem={({item}) =>

                            <View style={{backgroundColor:'rgba(243, 251, 255, 1)',padding:5,marginBottom:3}}>
                                
                                <View style={{flex:1,flexDirection:'row',padding:20}}>
                                    
                                    <View style={{padding:5, flexDirection:'column',flex:0.6,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{color:'black', fontWeight:'bold',fontSize:22}}>{item.Medicine}</Text>
                                        {/* <Text style={{color:'black'}}>{item.StoreName}</Text> */}
                                        <Text>Best Before: {ex}</Text>
                                    </View>
                                    <View style={{padding:5,flex:0.4, alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                    <View style={{ borderRadius:50,height:'60%', width:'60%', alignItems:'center',justifyContent:'space-evenly', borderWidth:1,borderColor:'black',flexDirection:'row',marginRight:10}}>
                                    <TouchableOpacity onPress={() => decrease(item.Medicine,medStore)}>
                                            <Text style={{color:'rgba(0, 116, 123, 1)',fontSize:20,fontWeight:'bold'}}>-</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Text style={{color:'rgba(0, 116, 123, 1)',fontSize:20}}>{item.Qty}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => increase(item.Medicine,medStore)}>
                                            <Text style={{color:'rgba(0, 116, 123, 1)',fontSize:20}}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontWeight:'500',fontSize:18}}>₹ {item.Price}</Text>
                                    </View>
                                    </View>
                                </View>
                                {/* <Text style={{color:'#fff', fontWeight:'bold'}}>{item.name}</Text>
                                <Text style={{color:'#fff'}}>{item.email}</Text>
                                <Text>City: {item.address.city}</Text> */}
                                </View>
                            }
                        />
                    </LinearGradient>
                </View>
            </View>
            {/* </View> */}
            <View style={styles.Tail}>
                <View style={styles.TailChild1}>
                <Text style={{fontSize:18, color:"black", alignSelf:'center'}}>Total Cart Value</Text>
                <Text style={{fontSize:18, color:"black", alignSelf:'center',fontWeight:'700'}}> ₹ {amount}</Text>
                </View>
                <View  style={styles.TailChild2} >
                    <TouchableOpacity style={styles.TailChild2_1} onPress={() => placeOrder()}>
                        <Text style={{fontSize:18, color:"white"}}>Place Order </Text>
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
        //borderTopRightRadius:26,
        //borderTopLeftRadius:26
    },
    linearGradient: {
        flex: 1,
    },
    Back: {
        //top:'15%',
        //left : '5%',
        //padding:'15%',
        color:'black',
        fontSize: 25,
    },
    Main: {
        width:'100%',
        height:'93%',
        backgroundColor:'purple',
    },
    
    Header: {
        width:'100%',
        height:'20%',
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
        height:'70%',
        width:'100%',
        //borderTopLeftRadius:26,
        //borderTopRightRadius:26,
        
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
        //top:'-10%',
        // backgroundColor:'#00747BCF',
        height:'100%',
        width:'100%',
        borderTopLeftRadius:26,
        borderTopRightRadius:26,
        alignSelf:'center',
        padding:10

    },
    Tail: {
        // flex:1,
        width:'100%',
        height:'10%',
        backgroundColor:'rgba(2, 118, 125, 0.35)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingRight:20,
        // paddingLeft:20
        
    },
    TailChild1 : {
        flex:0.5,
      
    },
    TailChild2 : {
        flex:0.5,
        justifyContent : "center",
        alignItems:'flex-end',
        
        
        
    },
    TailChild2_1 : {
        
        justifyContent : "center",
        alignItems:"center",
        width: "63%",
        height:'50%',
        borderRadius : 5,
        backgroundColor:"#02767d",
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
        height:'100%',
        //flexDirection:'column',
        //padding:'3%',
        //alignItems:'flex-start',
        //justifyContent:'center',
        //top:"-10%"
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