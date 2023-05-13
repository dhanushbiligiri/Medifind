import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
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

export default ProfileScreen = ({navigation}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [name, setName] = React.useState('');
    const [phnum, setPhnum] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const _retrieveData = async () => {
        try {
            // const valueName = await AsyncStorage.getItem('name');
            let user = await AsyncStorage.getItem('user');  
            console.log(user)
            let parsed = JSON.parse(user);  
            const phnum1 = parsed.contact;
            const name1 = parsed.name;

            if (name1 !== null) {
                
                console.log("async",name1);
                setName(name1);
            }
            if (phnum1 !== null) {
                
                console.log("async",phnum1);
                setPhnum(phnum1);
                console.log("saved ph",phnum)
            }
           
        } catch (error) {
            // Error retrieving data
            console.log(error)
        }
    }
    
    useEffect(() => {
        _retrieveData();
        
      },[]);
    

    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
            {/* <View style={styles.Main}> */}
            <View style={styles.Header}>
                <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                    <View style={styles.HeaderBody}>
                        {/* <View style={styles.ImageView}>
                            <Image source={imageProfile} />
                        </View>  */}
                        {/* <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:15}}>Anupam Kumar</Text>
                            <Text style={{fontSize:15}}>9876543210</Text>
                        </View>
                        <View style={styles.ImageView2}>
                            <Image source={imageEditProfile} />
                        </View> */}
                        <View style={styles.ImageView}>
                            <Image source={imageProfile} />
                            </View> 
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:20 , color:'white'}}>{name}</Text>
                            <Text style={{fontSize:15 , color:'white'}}>{phnum}</Text>
                        </View>
                        <View style={styles.ImageView2}>
                        {/* <TouchableOpacity 
                        // onPress={() => navigation.navigate('EditProfileScreen')}
                        >
                            <Image source={imageEditProfile} />
                        </TouchableOpacity> */}
                        </View>
                    </View>
                </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    <LinearGradient colors={['#007279', '#fff' ]} style={styles.linearGradientBody}>
                        <View style={styles.BodyPadding}>
                        <View style={styles.BodyItemsPadding}>
                        <TouchableOpacity onPress={() =>navigation.navigate('Order',{paramKey: name})}>
                            <Image source={myOrders} />
                        </TouchableOpacity>    
                        </View>
                        {/* <View style={styles.BodyItemsPadding}>
                        <TouchableOpacity>
                            <Image source={myAdresses} />
                        </TouchableOpacity>
                        </View> */}
                        <View style={{borderBottomColor: 'black',borderBottomWidth: 1, }} />
                        {/* <View style={styles.BodyItemsPadding}>
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
                        <TouchableOpacity onPress={() => navigation.navigate('CustomerLogin')}>
                            <Image source={logout} />
                            </TouchableOpacity>
                        </View>
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