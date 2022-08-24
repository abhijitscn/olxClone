import React from "react";
import { View,Text,TouchableOpacity,Image,StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth } from "../../Components/Dimentions";
const FabScreen=()=>{
    return(
        <>
        <View style={FabStyle.main}>
            <View style={FabStyle.noImageView}>
                <Image source={{uri:'https://img.freepik.com/premium-vector/no-data-concept-illustration_203587-28.jpg'}} resizeMode={'contain'} style={{height:'70%',width:'80%'}}/>
                <Text style={FabStyle.text1}>You haven't liked anything yet</Text>
                <Text style={FabStyle.text2}>Collect all the things</Text>
                <TouchableOpacity style={FabStyle.butView}>
                    <Text style={FabStyle.butText}>Discover</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:0.7}}></View>
            
        </View>
            
        </>
    )
}
const FabStyle=StyleSheet.create({
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
export default FabScreen;