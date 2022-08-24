import React from "react";
import { View,Text,StyleSheet,Image, } from "react-native";
import { responsiveHeight,responsiveWidth } from "../../Components/Dimentions";
const AllChatScreen=()=>{
    return(
        <>
            <View style={allStyle.main}>
            <View style={allStyle.noImageView}>
                <Image source={{uri:'https://media.istockphoto.com/vectors/decision-analysis-a-decision-tree-data-scientists-analytical-data-vector-id1153371535?k=20&m=1153371535&s=612x612&w=0&h=IjvnukByBOPyZ-xsuuCxhhWegqRnWb2bzso8bbMQbNA='}} resizeMode={'contain'} style={{height:'70%',width:'80%'}}/>
                <Text style={allStyle.text1}>You've got no chat history so far.</Text>
            </View>
            
        </View>
        </>
    )
}
const allStyle=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'white'
    },
    noImageView:{
        flex:1,
        alignItems:'center',
    },
    text1:{
        color:'#001a33',
        fontFamily:'Montserrat-SemiBold',
        fontSize:responsiveWidth(4)
    },
})
export default AllChatScreen;