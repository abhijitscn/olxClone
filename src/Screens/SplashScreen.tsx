import React from "react";
import { View,Text,SafeAreaView,Image,StyleSheet,StatusBar } from "react-native";
import { responsiveHeight,responsiveWidth } from "../Components/Dimentions";
const SplashScreen=()=>{
    return(
        <>
            <SafeAreaView style={SplashStyle.main}>
                <StatusBar translucent backgroundColor="transparent" />
                <Image style={SplashStyle.image} resizeMode={'contain'} source={require('../Assets/Pictures/olx-logo.png')}/>
                <Text style={SplashStyle.versionText}>Version 1.0.2</Text>
            </SafeAreaView>
        </>
    )
}
const SplashStyle=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        position:'relative'
    },
    image:{
        height:'30%',
        width:'60%'
    },
    versionText:{
        position:'absolute',
        bottom:responsiveHeight(7),
        color:'black',
        fontFamily:'Montserrat-SemiBold',
        fontSize:responsiveWidth(4)
    }


})
export default SplashScreen;