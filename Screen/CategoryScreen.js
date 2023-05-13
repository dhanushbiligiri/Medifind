import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { Searchbar } from 'react-native-paper';
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
// import Ayurveda from '../assets/Pictures/Ayurveda.png';
import Ayur from '../assets/Pictures/Ayur.png';
import medicine from '../assets/Pictures/medicine.png';
import homeopathy from '../assets/Pictures/homeopathy.png';
import healthessential from '../assets/Pictures/healthessential.png';
import covidessential from '../assets/Pictures/covidessential.png';
import sanitizer from '../assets/Pictures/sanitizer.png';
import womenscare from '../assets/Pictures/womenscare.png';
import immunitybooster from '../assets/Pictures/immunitybooster.png';
import everydayneeds from '../assets/Pictures/everydayneeds.png';
import others from '../assets/Pictures/others.png';


export default CategoryScreen = ({navigation}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView>
        <View style={{flexDirection: "column"}}>
        <View style={styles.Header}>
                    <LinearGradient colors={['#00747BCF', '#fff' ]} style={styles.linearGradient}>
                        <View style={styles.HeaderFlex}>
                            <Text style={{fontSize:35, top:'20%', paddingLeft:'5%'  }}>Category</Text>
                        </View>
                    </LinearGradient>
                </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                    <LinearGradient colors={['#007279', '#fff' ]} style={styles.linearGradientBody}>
                    <View style={{ flexDirection: 'row', height:'20%',padding:10,paddingTop:15}}>  
              <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Ayurveda"})} style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={Ayur} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlign:'right', marginLeft:'20%',justifyContent:'center',top:'-130%'}}> Ayurveda</Text>
              </View> 
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Medicines"})} style={{alignItems:'center',justifyContent:'center',backgroundColor:'white', height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={medicine} style={styles.ayurveda}/>
              </View>
              <View >
              <Text style={{textAlignVertical: 'center', textAlign: 'right',top:'-130%',marginLeft:'20%'}}> Medicines</Text>
              </View>
              </TouchableOpacity>
          </View>

              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
                  <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Homeopathy"})} style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
                  <View>
              <Image source={homeopathy} style={styles.ayurveda}/>
              </View>
              <View >
              <Text style={{ textAlignVertical: 'center', textAlign: 'center',marginLeft:'20%',top:'-130%'}}> Homeopathy</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Health Essentials"})} style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={healthessential} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center',marginLeft:'30%',top:'-130%' }}>Health Essentials</Text>
              </View>
              </TouchableOpacity>
              </View>
              
              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
              <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Covid Essentials"})} style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={covidessential} style={styles.ayurveda}/>
              </View>
              <View >
              <Text style={{ textAlignVertical: 'center', textAlign: 'center',marginLeft:'30%',top:'-130%'}}>Covid Essentials</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Sanitizers and Handwash"})} style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={sanitizer} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center',marginLeft:'20%',top:'-80%'}}>Sanitizers & Handwash</Text>
              </View>
              </TouchableOpacity>
              
          
              </View>
              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
                  <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Women care"})} style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
                  <View>
              <Image source={womenscare} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{ textAlignVertical: 'center', textAlign: 'center',marginLeft:'20%',top:'-130%'}}>Women care</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Immunity Booster"})} style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={immunitybooster} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center',marginLeft:'30%',top:'-130%'}}>Immunity Booster</Text>
              </View>
              </TouchableOpacity>
              
          
              </View>
              <View style={{flexDirection: 'row',height:'20%',padding:10}}>
                  <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Everyday Needs"})} style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
                  <View>
              <Image source={everydayneeds} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{ textAlignVertical: 'center', textAlign: 'center',marginLeft:'25%',top:'-130%'}}> Everyday Needs</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('medicalCategory',{paramsKey:"Others"})} style={{ alignItems:'center',justifyContent:'center',backgroundColor:'white',height:'100%',width:'50%', borderRadius:12,marginRight:5,shadowColor: '#000',shadowOffset: { width: 1, height: 1 },shadowOpacity:  0.4,shadowRadius: 3,elevation: 5,}}>
              <View>
              <Image source={others} style={styles.ayurveda}/>
              </View>
              <View>
              <Text style={{textAlignVertical: 'center', textAlign: 'center',marginLeft:'20%',top:'-130%'}}>Others</Text>
              </View>
              </TouchableOpacity>
              
          
              </View>
                   
                    </LinearGradient>
                </View>
            </View>
            <View style={styles.Tail}>
             
            <View style={styles.bottomNavi}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                    <IconI size={24} color="black" name="home-outline" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('WishlistScreen')}>
                    <IconF5 size={24} color="black" name="heart"  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                    <IconI size={24} color="black" name="person-outline" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
                    <IconM size={24} color="white" name="category" />
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
        height:'110%',
        width:'98%',
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
        flexDirection:'column',
        padding:'3%',
        
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
   ayurveda:{
        marginLeft:'-40%',
        marginTop:'10%',
   },

})