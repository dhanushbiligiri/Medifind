import * as React from 'react';
import { StyleSheet, View, Text, Image } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import Finder from '../assets/Pictures/find.png';
import Path from '../assets/Pictures/path.png'
import Home from '../assets/Pictures/home.png'
import Pharma from '../assets/Pictures/pharma.png'
import Tab1 from '../assets/Pictures/tab1.png'
import Elevations from 'react-native-elevation';

const {width, height} = Dimensions.get('window');

export default LandingScreen = ({navigation}) =>  {
  return (
    <LinearGradient colors={['#80f0ff', '#FFFFFF' ]} style={styles.linearGradient}>
        <SafeAreaView>
       
        <View style={styles.TextView}>
            <Text style={styles.Text}>medifind.</Text>  
            <Text style={styles.subText}>Find Book Take</Text>
        </View>
        {/* medicinesbg */}
        <View style={styles.Ellipse1} />
        <View style={styles.Ellipse2} />
        <View style={styles.Ellipse3} />
        <View style={styles.Ellipse4} />
        <View style={styles.Rectangle12} />
        <View style={styles.Rectangle16} />
        <View style={styles.Rectangle15} />
        <Image source={Tab1}/>
        {/* Image */}
        <View style={styles.FinderView}>
            <Image source={Finder} style={styles.finder}/>
        </View>
        <TouchableOpacity style={styles.Touch} onPress={() => navigation.navigate('CustomerLanding')}>
            <View style={styles.GetStartedButton}>
            <Text style={styles.getText}>Get Started</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.Image}>
            <Image source={Home} style={styles.home}/>
            <Image source={Path} style={styles.path}/>
            <Image source={Pharma} style={styles.pharma}/>
        </View>
            <View style={styles.GreyEllipse1} />
        </SafeAreaView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
      linearGradient: {
        flex:1,
      },
      
      TextView: {
          zIndex:2,
          alignItems:"center",
          top:height/5,
        //   fontFamily: 'Montserrat',
      },
      Text: {
        fontSize:36,
      },
      subText: {
        fontSize:24,
      },
      FinderView: {
        alignItems:"center",
      },
      finder: {
          top:height/18,
      },
    //   medicinesbg
    Ellipse1: {
        backgroundColor: "rgba(128,240,255,0.28)",
        width: 32,
        height: 33,
        borderRadius: 16,
        top:height/1000,
        left: width-20,
      },
    Ellipse2: {
        backgroundColor: "rgba(128,240,255,0.28)",
        width: 32,
        height: 33,
        borderRadius: 16,
        top:height/1000,
        left: width-10,
      },
    Ellipse3: {
        backgroundColor: "rgba(128,240,255,0.28)",
        width: 32,
        height: 33,
        borderRadius: 16,
        top:height/1000,
        left: width/3,
      },
    Ellipse4: {
        backgroundColor: "#80FFD947",
        width: 32,
        height: 33,
        borderRadius: 16,
        left: width/3,
        top: height/3,
      },
    Rectangle11: {
        backgroundColor: "rgba(249,168,38,0.26)",
        transform: [
            { rotateX: "45deg" },
            { rotateZ: "45deg" }
          ],
        width: 51,
        height: 24.19,
        borderRadius: 12,
        opacity: 0.5,
      },
      Rectangle12: {
        backgroundColor: "rgba(255,205,205,1)",
        transform: [
          { rotateY: "45deg" },
          { rotateZ: "45deg" }
        ],
        width: 51,
        height: 24.19,
        borderRadius: 12,
        opacity: 0.5,
        zIndex:2,
        top: height/4
      },
      Rectangle16: {
        backgroundColor: "rgba(128,240,255,0.28)",
        transform: [
            { rotateX: "45deg" },
            { rotateZ: "45deg" }
          ],
        width: 31.89,
        height: 3,
        top:height/40,
        left: width/3,
      },
      Rectangle15: {
        backgroundColor: "#80FFD947",
        transform: [
            { rotateY: "45deg" },
            { rotateZ: "45deg" }
          ],
        width: 31.89,
        height: 3,
        top:height/50,
        left: width/2,
      },
      //ellipse
      GreyEllipse1: {
        backgroundColor: "rgba(71,106,125,1)",
        width: width*1.6,
        height: height,
        borderRadius: 301.5,
        position:"absolute",
        left: -22,
        top: height/1.7,
      },
      //button
      GetStartedButton: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        shadowColor: "rgba(0,0,0,0.25)",
        elevation: 0,
        shadowOffset: { width: 0, height: 4 },
        width: 210,
        height: 46,
        borderRadius: 23,
        left: width/4,
        top: height/2.5,
        alignItems:'center',
        justifyContent:'center',
      },
      Touch: {
        zIndex:2,
        elevation: (Platform.OS === 'android') ? 50 : 0,
      },
      getText: {
        fontSize:16,
      },
      //images
      Image:{
        display:'flex',
        flexDirection:'row',
        flexWrap: "wrap",
        zIndex:2,
        elevation: (Platform.OS === 'android') ? 50 : 0,
        top:height/6,
        alignItems:'center',
        justifyContent:'center'
      },


  })
