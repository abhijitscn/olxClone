import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FabScreen from "../Screens/MyAddsScreens/FabScreen";
import AdsScreen from "../Screens/MyAddsScreens/AdsScreen";
import { responsiveHeight,responsiveWidth } from "../Components/Dimentions";
const Tab=createMaterialTopTabNavigator();

const MyAddSNavigation=()=>{
    return(
        <>
        <View style={{backgroundColor:'white',flex:1}}>
            <View style={addNavStyle.headerMain}>
                <Text style={addNavStyle.headerText}>My Ads</Text>
            </View>
            <Tab.Navigator screenOptions={{tabBarActiveTintColor:'#001a33',tabBarLabelStyle:{fontSize:responsiveWidth(3),fontFamily:'Montserrat-SemiBold'},tabBarIndicatorStyle:{backgroundColor:'#001a33'}}} initialRouteName='ads'>
                <Tab.Screen name="ads" component={AdsScreen}/>
                <Tab.Screen name="favourites" component={FabScreen}/>
            </Tab.Navigator>
        </View>
        </>
    )
}
const addNavStyle=StyleSheet.create({
    headerMain:{
        paddingVertical:responsiveHeight(2.5),
        paddingLeft:responsiveWidth(3)
    },
    headerText:{
        color:'#001a33',
        fontSize:responsiveWidth(4),
        fontFamily:'Montserrat-Medium'
    }
})
export default MyAddSNavigation;