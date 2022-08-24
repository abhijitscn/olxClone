import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../Components/Dimentions";
const AdsScreen=()=>{
    return(
        <>
        <View style={adsStyle.main}>
            <View style={adsStyle.noImageView}>
                <Image source={{uri:'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?w=2000'}} resizeMode={'contain'} style={{height:'70%',width:'80%'}}/>
                <Text style={adsStyle.text1}>You haven't liked anything yet</Text>
                <Text style={adsStyle.text2}>Let go of what you don't use anymore</Text>
                <TouchableOpacity style={adsStyle.butView}>
                    <Text style={adsStyle.butText}>Post</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:0.8}}></View>
            
        </View>
        </>
    )
}
const adsStyle=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white'
    },
    noImageView:{
        flex:2,
        alignItems:'center',
        justifyContent:'space-around'
    },
    butView:{
        height:responsiveHeight(5),
        width:responsiveWidth(60),
        backgroundColor:'#001a33',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:responsiveHeight(1)
    },
    butText:{
        color:'white',
        fontFamily:'Montserrat-SemiBold',
        fontSize:responsiveWidth(3.5)
    },
    text1:{
        color:'#001a33',
        fontFamily:'Montserrat-SemiBold',
        fontSize:responsiveWidth(4)
    },
    text2:{
        color:'#001a33',
        fontFamily:'Montserrat-Medium',
        fontSize:responsiveWidth(2.8)
    }
})
export default AdsScreen