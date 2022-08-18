import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import { responsiveHeight,responsiveWidth } from "./Dimentions";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
interface productProps{
    obj:{id:number, price:number , name:string, url:string,loaction:string}
}
const ProductCard:React.FC<productProps>=({obj})=>{
    return(
        <>
        <View style={productStyle.main}>
            <View style={productStyle.imageView}>
                <TouchableOpacity style={productStyle.fabView}>
                    <FontAwesome name='heart-o' size={responsiveWidth(4) } color={'black'}/>
                </TouchableOpacity>
                <Image source={{uri:obj.url}} style={{height:'90%',width:'85%'}} resizeMode={'contain'}/>
            </View>
            <View style={productStyle.descView}>
                <Text style={productStyle.priceText}>₹ {obj.price}</Text>
                <Text style={productStyle.descText}>{obj.name}</Text>
            </View>
            <View style={productStyle.loctView}>
                <SimpleLineIcons name={'location-pin'} size={responsiveWidth(3.5)} style={{marginRight:responsiveWidth(2)}} color={'black'}/>
                <Text style={productStyle.locationText}>{obj.loaction}</Text>
            </View>

        </View>
        
        </>
    )
}
const productStyle=StyleSheet.create({
    main:{
        height:responsiveHeight(30),
        width:responsiveWidth(46),
        borderWidth:responsiveWidth(0.8),
        borderColor:'#e6e6e6',
        borderRadius:responsiveWidth(2),
        padding:responsiveWidth(2),
        margin:responsiveWidth(2)
    },
    imageView:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    descView:{
        flex:1
    },
    loctView:{
        flex:0.5,
        flexDirection:'row',
        alignItems:'center',
    },
    priceText:{
        color:'black',
        fontSize:responsiveWidth(4),
        fontFamily:'Montserrat-Bold'
    },
    descText:{
        color:'black',
        fontSize:responsiveWidth(3),
        fontFamily:'Montserrat-Medium'
    },
    locationText:{
        color:'#404040',
        fontSize:responsiveWidth(3),
        fontFamily:'Montserrat-Medium'
    },
    fabView:{
        height:responsiveHeight(4),
        width:responsiveHeight(4),
        borderRadius:responsiveHeight(2),
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:responsiveWidth(2),
        right:responsiveWidth(2),
        zIndex:2,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: responsiveHeight(6),
        },
        shadowOpacity: 0.51,
        shadowRadius: responsiveWidth(3),
        elevation: 15,
        }
})
export default ProductCard;