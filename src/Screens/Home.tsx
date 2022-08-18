import React from "react";
import { View,Text,StatusBar,StyleSheet,TextInput,ScrollView,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { responsiveHeight,responsiveWidth } from "../Components/Dimentions";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import CategoryData from "../Assets/data/categoryData";
import ProductCard from "../Components/ProductCard";
import ProductData from "../Assets/data/ProductData";
const HomeScreen=()=>{
    return(
        <>
            <SafeAreaView style={homeStyle.main}>
                <StatusBar  backgroundColor="#001a33"/>
                <View style={homeStyle.searchMainView}>
                    <View style={homeStyle.locationView}>
                        <Ionicons name="location-sharp" size={responsiveWidth(4.5)} color={'#001a33'}/>
                        <Text style={homeStyle.locationText}>NewTown</Text>
                        <MaterialIcons name="keyboard-arrow-down" size={responsiveWidth(5)} color={'#001a33'}/>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View style={homeStyle.searchbar}>
                            <Ionicons name="search" size={responsiveWidth(6)} style={{marginHorizontal:responsiveWidth(1.5)}} color={'#001a33'}/>
                            <TextInput placeholder="Find Cars,Mobile Phones and more" style={{paddingVertical:responsiveWidth(0.7),width:'82%',fontFamily:'Montserrat-SemiBold'}}/>
                        </View>
                        <Fontisto name="bell" size={responsiveWidth(6)}  color={'#001a33'}/>
                    </View>    
                </View>
                <ScrollView >
                        <View style={homeStyle.categoryMain}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:responsiveWidth(2),alignItems:'center'}}>
                                <Text style={{fontFamily:'Montserrat-Medium',color:'#001a33',fontSize:responsiveWidth(3.5)}}>Browse categories</Text>
                                <Text style={{fontFamily:'Montserrat-SemiBold',color:'#001a33',fontSize:responsiveWidth(3),textDecorationLine:'underline'}}>See all</Text>
                            </View>
                            <FlatList
                                data={CategoryData}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({index,item})=>{
                                    return(
                                        <>
                                        <View style={{justifyContent:'space-around',marginLeft:responsiveWidth(1), width:responsiveWidth(25),alignItems:'center'}}>
                                            <MaterialIcons name={item.iconName} size={responsiveWidth(11)} color={item.color}/>
                                            <Text style={{fontFamily:'Montserrat-Medium',color:'#001a33',fontSize:responsiveWidth(2.4),textAlign:'center'}}>{item.name}</Text>
                                        </View>                                        
                                        </>
                                    )
                                }}
                            />    
                        </View>
                        <View style={homeStyle.productListMain}>
                            <Text style={homeStyle.productListHeader}>Fresh recommendations</Text>
                            <View style={homeStyle.productListContainer}>
                                {ProductData.map((res)=>(
                                     <ProductCard key={res.id} obj={res}/>
                                ))}   
                            </View>
                        </View>
                    </ScrollView>
            </SafeAreaView>
        
        </>
    )
}
const homeStyle=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#e6e6e6'
    },
    searchMainView:{
        paddingHorizontal:responsiveWidth(3), 
        width:'100%'
    },
    locationView:{
        flexDirection:'row',
        marginVertical:responsiveHeight(1),
        alignItems:'center'
    },
    locationText:{
        fontSize:responsiveWidth(3),
        color:'#001a33',
        fontFamily:'Montserrat-SemiBold',
        marginHorizontal:responsiveWidth(2.5)
    },
    searchbar:{
        flexDirection:'row',
        borderWidth:responsiveWidth(0.4),
        borderColor:'#001a33',
        alignItems:'center',
        borderRadius:responsiveWidth(2),
        marginVertical:responsiveWidth(1.5)
    },
    categoryMain:{
        paddingHorizontal:responsiveWidth(2),
        backgroundColor:'white',
        paddingVertical:responsiveHeight(1)
    },
    productListMain:{
        marginTop:responsiveHeight(1),
        backgroundColor:'white'
    },
    productListHeader:{
        marginLeft:responsiveWidth(2),
        fontFamily:'Montserrat-Medium',
        color:'#001a33',
        fontSize:responsiveWidth(3.5),
        marginVertical:responsiveHeight(1)
    },
    productListContainer:{
       flexDirection:'row',
       flexWrap:'wrap',
       
    }
})
export default HomeScreen;