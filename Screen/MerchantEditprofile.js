import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { Searchbar } from 'react-native-paper';
import imageProfile from '../assets/Pictures/imageProfile.png'
import Contact from '../assets/Pictures/Contact.png'
import { ScrollView } from 'react-native';
import Name from '../assets/Pictures/Name.png';
import Email from '../assets/Pictures/Email.png';
import Aadhar from '../assets/Pictures/AadhaarNo.png';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconF5 from 'react-native-vector-icons/FontAwesome5';

export default MerchantEditprofile = ({navigation}) =>  {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [aadhar, setAadhar] = React.useState('');

    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
            {/* <View style={styles.Main}> */}
                <View style={styles.Header}>
                    <LinearGradient colors={['#FFC0CB', '#FFFFFF' ]} style={styles.linearGradient}>
                        <View style={styles.HeaderFlex}>
                            <TouchableOpacity onPress={() => navigation.navigate('MerchantProfile')}>
                            <Text style={styles.Back}> {'<'} </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    <LinearGradient colors={['#EDA8AE', '#fff' ]} style={styles.linearGradientBody}>
                        <View style={styles.BodyFlex}>
                    <View style={styles.ImageView}>
                            <Image source={imageProfile} />
                            </View> 
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:20 ,color:'white'}}>Manjunatha Medicals</Text>
                            <Text style={{fontSize:15 ,color:'white'}}>69696969696969</Text>
                        </View>
                        </View>

                        <View style={styles.BodyPadding}>
                            <View style={{padding:'5%' , flexDirection: 'row'}}>
                                <Image source={Name} />
                                {/* <View>
                                    <TextInput
                                        label="name"
                                        value={name}
                                        onChangeText={name => setName(name)}/>
                                </View> */}
                            </View>
                            <View style={{borderBottomColor: 'grey',borderBottomWidth: 1, }} />
                            <View style={styles.BodyPadding}>
                                <Image source={Email} />
                                {/* <View>
                                    <TextInput
                                        label="email"
                                        value={email}
                                        onChangeText={email => setEmail(email)}/>
                                </View> */}
                            </View>
                            <View style={{borderBottomColor: 'grey',borderBottomWidth: 1, }} />
                            <View style={styles.BodyPadding}>
                                <Image source={Contact} />
                                {/* <View>
                                    <TextInput
                                        label="contact"
                                        value={contact}
                                        onChangeText={contact => setContact(contact)}/>
                                </View> */}
                            </View>
                            <View style={{borderBottomColor: 'grey',borderBottomWidth: 1, }} />
                            <View style={styles.BodyPadding}>
                                <Image source={Aadhar} />
                                {/* <View>
                                    <TextInput
                                        label="aadhar"
                                        value={aadhar}
                                        onChangeText={aadhar => setAadhar(aadhar)}/>
                                </View> */}
                            </View>
                            <View style={{borderBottomColor: 'grey',borderBottomWidth: 1, }} />
                        </View>
                    </LinearGradient>
                </View>
            </View>
            <View style={styles.Tail}>
                <View style={styles.bottomNavi}>
                    <TouchableOpacity>
                        <Text style={{color:'white'}}>Save</Text>
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
    Back: {
        top:'-30%',
        left : '-10%',
        padding:'15%',
        color:'white',
        fontSize: 25,
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
    BodyFlex: {
        flexDirection:'row',
        padding:'5%',
        // width:'100%',
        // height:'25%',
        // flex:1,
        // backgroundColor:'#010101'
    },
    Body: {
        // flex:4,
        top : '-7.5%',
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
        backgroundColor:'#fff',
        alignItems: 'center',
        //justifyContent:'center'
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
        flexDirection:'column',
        padding:'3%',
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
        width: '30%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:26,
        margin:5,
        // padding:10,
        top:8,
        //flexDirection:'row',
    },
   icon: {
       color:'black',
   },
   BodyPadding: {
       padding: '5%',
       //flexDirection: 'row',
   }

})