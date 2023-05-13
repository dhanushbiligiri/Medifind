import * as React from 'react';
import { StyleSheet, View, Text, Image,FlatList,Alert } from "react-native"
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

import { useState,useEffect } from 'react';

export default WishlistScreen  = ({navigation}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const [data, setData] = useState([]);
    const [dataAva, setDataAva] = useState([]);
    const [storeConst, setstoreConst] = useState("");
   
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
    const addToCart2 = async (med,store) => {
        //adding to cart
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name:med,Store:store})
        };
        try {
            await fetch(
               ipCon.ip+'/sameCart', requestOptions)
               .then(res => {
                   // console.log(res)
                   res.json()
                       .then(data => {
                           
                           // props.navigation.replace('CustomerLogin')
                           console.log("data")
                           const response = data.Msg;
                           let row = data.Rows;
                            console.log(response);
                            console.log(row);
                            if(response === "Added to cart"){
                                alert("Added to cart")
                            }
                            
                            setDataAva(data.Rows);
                       });
               })
               
       }
       catch (error) {
           console.error(error);
       }
    }

    const simplyaddtocart = async (med,store) => {
        //adding to cart

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name:med,Store:store})
        };
        try {
            console.log("inside")
            await fetch(
               ipCon.ip+'/sameCart', requestOptions)
               .then(res => {
                   // console.log(res)
                   res.json()
                       .then(data1 => {
                           
                           // props.navigation.replace('CustomerLogin')
                           console.log("data")
                           const response = data1.Msg;
                           let row = data1.Rows;
                            console.log(response);
                            console.log(row);
                            if(response === "Added to cart"){
                                alert("Added to cart")
                            }
                            
                            setDataAva(data1.Rows);
                       });
               })
               
       }
       catch (error) {
           console.error(error);
       }
    }
    

    const addToCart = async (med,store) => {
        console.log(med)
        console.log(store)
        //checking if same store
        try{
            await fetch(
                ipCon.ip+'/cart')
                .then(res => {
                    // console.log(res)
                    res.json()
                        .then(data => {
                            console.log(data.Msg)
                            const msg = data.Msg
                            if(msg === "Null"){
                                addToCart2(med,store);
                                
                            }
                            else{
                                var response = data.Rows[0].StoreName;
                            
                                console.log("res")
                                console.log(response);
                                console.log(med);
                                if(response !== store ){
                                 

                                 Alert.alert(
                                    'Replace Cart Items?',
                                    "Your cart contians medicines from "+response+". Do you want to discard the selection and add medicines from "+store+ "?",
                                    [
                                      { text: 'Cancel', onPress: () => { }, style: 'cancel' },
                                      {
                                        text: 'OK', onPress: async () => {
                                          //Filter Data 
                                          const requestOptions = {
                                              method: 'POST',
                                              headers: { 'Content-Type': 'application/json' },
                                              body: JSON.stringify({ Name:med,Store:store})
                                          };
                                          try {
                                                    await fetch(
                                                       ipCon.ip+'/wishlistToCart', requestOptions)
                                                       .then(res => {
                                                           // console.log(res)
                                                           res.json()
                                                               .then(data => {
                                                                   
                                                                   // props.navigation.replace('CustomerLogin')
                                                                   console.log("data")
                                                                   const response = data.Msg;
                                                                   let row = data.Rows;
                                                                    console.log(response);
                                                                    console.log(row);
                                                                    if(response === "Added to cart"){
                                                                        alert("Added to cart")
                                                                    }
                                                                    
                                                                    setDataAva(data.Rows);
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
                                else{
                                    addToCart2(med,store)

                                }
                             
                            //  setDataAva(data.Rows);
                            }
                        });
                })

        }
        catch (error) {
           console.error(error);
        }
        //adding to cart
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ Name:med,Store:store})
    //     };
    //     try {
    //         await fetch(
    //            ipCon.ip+'/wishlistToCart', requestOptions)
    //            .then(res => {
    //                // console.log(res)
    //                res.json()
    //                    .then(data => {
                           
    //                        // props.navigation.replace('CustomerLogin')
    //                        console.log("data")
    //                        const response = data.Msg;
    //                        let row = data.Rows;
    //                         console.log(response);
    //                         console.log(row);
    //                         if(response === "Added to cart"){
    //                             alert("Added to cart")
    //                         }
                            
    //                         setDataAva(data.Rows);
    //                    });
    //            })
               
    //    }
    //    catch (error) {
    //        console.error(error);
    //    }
    }

    const deleteAva = async (med) => {
     
        Alert.alert(
          'Are You Sure Want To Remove Item ' + med.toUpperCase() + ' from your WishList',
          'Select Below Options',
          [
            { text: 'Cancel', onPress: () => { }, style: 'cancel' },
            {
              text: 'OK', onPress: async () => {
                //Filter Data 
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ Name:med})
                };
                try {
                     await fetch(
                        ipCon.ip+'/delAva', requestOptions)
                        .then(res => {
                            // console.log(res)
                            res.json()
                                .then(data => {
                                    
                                    // props.navigation.replace('CustomerLogin')
                                    console.log("data")
                                    console.log(data)
                                    setDataAva(data);
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

    const deleteSelectedElement = async (med) => {
     
        Alert.alert(
          'Are You Sure Want To Remove Item ' + med.toUpperCase() + ' from your WishList',
          'Select Below Options',
          [
            { text: 'Cancel', onPress: () => { }, style: 'cancel' },
            {
              text: 'OK', onPress: async () => {
                //Filter Data 
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ Name:med})
                };
                try {
                     await fetch(
                        ipCon.ip+'/wishlistDelete', requestOptions)
                        .then(res => {
                            // console.log(res)
                            res.json()
                                .then(data => {
                                    
                                    // props.navigation.replace('CustomerLogin')
                                    console.log("data")
                                    console.log(data)
                                    setData(data);
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

    useEffect(() => {
        fetchData();
        fetchAvailable();
      }, []);

    //   useEffect(() => {
    //     fetchData();
    //   });

   
    

    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
            {/* <View style={styles.Main}> */}
                <View style={styles.Header}>
                    <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:35, top:'20%', paddingLeft:'3%'  }}>Wishlist</Text>
                            <TouchableOpacity style={{top:'17%' }} onPress={() => navigation.navigate('AddToWishScreen')}>
                            <Text style={{fontSize:50, paddingLeft:'3%'}}>(+)</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    <LinearGradient colors={['rgba(0, 114, 121, 0.61)', '#fff' ]} style={styles.linearGradientBody}>
                        
                        <Text style={{fontSize:24,marginLeft:5}}>Not Available</Text>
                        <FlatList
                            data={data}
                            // keyExtractor={(item,index) => index.toString()}
                            keyExtractor={(item) => item.Medicine}
                            renderItem={({item}) =>

                            <View style={{backgroundColor:'rgba(119, 180, 185, 0.8)',padding:10,marginBottom:3,flexDirection:'row'}}>
                                <View style={{flex:.8,alignItems:'flex-end',flexDirection:'row',justifyContent:'center'}}>
                                <Text style={{color:'#fff', fontWeight:'bold',alignSelf:'center', fontSize:24}}>{item.Medicine}</Text>
                                </View>
                                <View style={{flex:.2}}>
                                    <TouchableOpacity style ={{alignSelf:'flex-end',justifyContent:'flex-end'}} onPress={() => deleteSelectedElement(item.Medicine)}>
                                        <IconI size={26} color="black" name="heart" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            }

                        />
                        <Text style={{fontSize:24,marginLeft:5}}>Available</Text>
                        <FlatList
                            data={dataAva}
                            // keyExtractor={(item,index) => index.toString()}
                            keyExtractor={(item) => item.Medicine}
                            renderItem={({item}) =>
                            <View style={{backgroundColor:'rgba(119, 180, 185, 0.8)',padding:10,marginBottom:1,flexDirection:'row'}}>
                                <View style={{flex:.7,alignItems:'flex-end',flexDirection:'column',justifyContent:'center'}}>
                                <Text style={{color:'#fff', fontWeight:'bold',alignSelf:'center', fontSize:20}}>{item.Medicine}</Text>
                                    <Text style={{color:'#fff', fontWeight:'bold',alignSelf:'center', fontSize:20}}>{item.StoreName}</Text>
                                </View>
                                
                                <TouchableOpacity onPress={() => addToCart(item.Medicine,item.StoreName)} style={{flex:.2, alignItems:'center',justifyContent:'center'}}>
                                    <View style={{ width:'70%', borderRadius:24, borderWidth:1,borderColor:'grey',padding:3}}>
                                    <Text style={{color:'rgba(0, 116, 123, 1)',alignSelf:"center"}}>+ Add</Text>
                                    </View>
                                </TouchableOpacity>
                                
                                <View style={{flex:.1}}>
                                    <TouchableOpacity style ={{alignSelf:'flex-end',justifyContent:'flex-end'}} onPress={() => deleteAva(item.Medicine)}>
                                        <IconI size={26} color="black" name="heart" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            // <View style={{backgroundColor:'rgba(119, 180, 185, 0.8)',flexDirection:'row'}}>
                            //     <View style={{flex:.7,alignItems:'center',justifyContent:'flex-start',flexDirection:'column'}}>
                            //     <Text style={{color:'#fff', fontWeight:'bold',alignSelf:'center', fontSize:20}}>{item.Medicine}</Text>
                            //     <Text style={{color:'#fff', fontWeight:'bold',alignSelf:'center', fontSize:20}}>{item.StoreName}</Text>
                            //     </View>
                            //     <View style={{flex:.2, alignItems:'center',justifyContent:'center'}}>
                            //         <TouchableOpacity onPress={() => addToCart(item.Medicine,item.StoreName)} style={{ borderRadius:24,height:'40%', width:'100%', alignItems:'center',justifyContent:'center', borderWidth:1,borderColor:'grey'}}>
                            //         <Text style={{color:'rgba(0, 116, 123, 1)',alignSelf:"center"}}>+ Add</Text>
                            //         </TouchableOpacity>
                                    
                            //     </View>
                            //     <View style={{flex:.1}}>
                            //         <TouchableOpacity style ={{alignSelf:'flex-end',justifyContent:'flex-end'}} onPress={() => deleteSelectedElement(item.Medicine)}>
                            //             <IconI size={26} color="black" name="heart" />
                            //         </TouchableOpacity>
                            //     </View>
                            // </View>

                            }

                        /> 
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
        paddingTop:40
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
