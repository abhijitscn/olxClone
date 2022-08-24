import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllChatScreen from "../Screens/ChatScreens/AllChatScreen";
import SellingScreen from "../Screens/ChatScreens/SellingScreen";
import BuyingChatScreen from "../Screens/ChatScreens/BuyingChatScreen";
import { responsiveHeight,responsiveWidth } from "../Components/Dimentions";
const Tab=createMaterialTopTabNavigator();
const ChaNavigation=()=>{
    return(
        <>
        <View style={{backgroundColor:'white',flex:1}}>
            <View style={chatNavStyle.headerMain}>
                <Text style={chatNavStyle.headerText}>Chats</Text>
            </View>
            <Tab.Navigator screenOptions={{tabBarActiveTintColor:'#001a33',tabBarLabelStyle:{fontSize:responsiveWidth(3),fontFamily:'Montserrat-SemiBold'},tabBarIndicatorStyle:{backgroundColor:'#001a33'}}} initialRouteName='all'>
                <Tab.Screen name='all' component={AllChatScreen}/>
                <Tab.Screen name="buying" component={BuyingChatScreen}/>
                <Tab.Screen name="selling" component={SellingScreen}/>
            </Tab.Navigator>
        </View>
        
        </>
    )
}
const chatNavStyle=StyleSheet.create({
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
export default ChaNavigation;