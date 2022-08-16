import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home";
import AccountScreen from "../Screens/AccountScreen";
import ChatScreen from "../Screens/ChatScreen";
import MyaddScreen from "../Screens/MyaddScreen";
import SellsScreen from "../Screens/SellsScreen";
const tabs=createBottomTabNavigator();

const MainTab=()=>{
    return(
        <tabs.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <tabs.Screen name="Home" component={HomeScreen}/>
            <tabs.Screen name="Chat" component={ChatScreen}/>
            <tabs.Screen name="Sells" component={SellsScreen}/>
            <tabs.Screen name="Myadd" component={MyaddScreen}/>
            <tabs.Screen name="account" component={AccountScreen}/>    
        </tabs.Navigator>
    )
}
export default MainTab;