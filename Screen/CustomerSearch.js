import * as React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from "react-native"
import { Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import { Searchbar } from 'react-native-paper';
import Image1 from '../assets/Pictures/image1.png';
import Cart from '../assets/Pictures/Cart.png';
import ipCon from '../ipConfig.json'

export default CustomerSearch = ({navigation}) =>  {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [data, setData] = React.useState();
    const onChangeSearch = query => setSearchQuery(query);

    const search = async () => {
        console.log(searchQuery)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Value:searchQuery})
        };
        try {
            await fetch(
                ipCon.ip+"/search", requestOptions)
                .then(res => {
                    res.json()
                        .then(data => {
                            
                            // props.navigation.replace('CustomerLogin')
                            console.log(data)
                            
                            setData(data);
                         
                            
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
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                            <Text style={styles.Back}> {'<'} </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                    <Searchbar
                        placeholder="Search Medical Stores"
                        onChangeText={onChangeSearch}
                        onIconPress ={search}
                        value={searchQuery}   
                        style= {styles.Search}    
                    />
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.Body}>
                <View style={styles.BodyLayout}>
                <FlatList
                            data={data}
                            // keyExtractor={(item,index) => index.toString()}
                            keyExtractor={(item) => item.Medical}
                            renderItem={({item, index}) =>

                            <TouchableOpacity onPress={() => navigation.navigate('medicineByStore',{store:item.Store_Name})} style={{padding:5,marginBottom:3, borderColor:'grey', borderWidth:1, flexDirection:'row'}}>
  
                                    <View style={{padding:10,flex:1, alignItems:'flex-start', justifyContent:'center',flexDirection:'column'}}>
                                        <Text style={{color:'black', fontWeight:'bold'}}>{item.Store_Name}</Text>
                                       
                                    </View>
                            </TouchableOpacity>
                            
                                

                            }

                        />
                    
                </View>
            </View>
            {/* </View> */}
            <View style={styles.Tail}>
                <TouchableOpacity onPress={() => navigation.navigate('CustomerCart')}>
                    <View style={styles.TailChild}>
                        <Text style={{fontSize:18, color:"white", top:"-60%"}}>Go to Cart   {'>'}</Text>
                    </View>
                </TouchableOpacity>
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
        // top:'%',
        left : '5%',
        //padding:'15%',
        color:'black',
        fontSize: 25,
    },
    Tail: {
        // flex:1,
        width:'100%',
        height:'10%',
       // top:"-5%",
        backgroundColor:"rgba(2, 118, 125, 0.35)",
        //background: rgba(2, 118, 125, 0.35)   
    },
    TailChild : {
        left:"60%",
        top:"24%",
        justifyContent : "center",
        alignItems:"center",
        width: "35%",
        paddingTop : "7%", 
        borderRadius : 5,
        // right : "5%",
        backgroundColor:"#02767d",
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
    
    Search: {
        marginTop:'-5%',
        borderRadius:14,
        width: '93%',
        height: "55%",
        alignItems:'center',
        justifyContent:'space-evenly',
        left : "15%"

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