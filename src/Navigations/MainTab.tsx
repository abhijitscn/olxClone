import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";
import HomeScreen from "../Screens/Home";
import AccountScreen from "../Screens/AccountScreen";
import ChatScreen from "../Screens/ChatScreen";
import MyaddScreen from "../Screens/MyaddScreen";
import SellsScreen from "../Screens/SellsScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { responsiveHeight,responsiveWidth } from "../Components/Dimentions";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const tabs=createBottomTabNavigator();



const MainTab=()=>{
  
    return(
        <tabs.Navigator initialRouteName="Home" screenOptions={{headerShown:false, tabBarShowLabel:false,tabBarStyle:{paddingHorizontal:0}}} >
            <tabs.Screen name="Home" options={{tabBarIcon:({focused})=>(
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    {focused?
                    <Ionicons name="home" color={'black'} size={responsiveHeight(2.7)}/>
                    :
                    <Ionicons name="home-outline" color={'black'} size={responsiveHeight(2.7)}/>
                    }
                    <Text style={{fontSize:focused?responsiveWidth(2.8):responsiveWidth(2.5),fontFamily:focused?'Montserrat-SemiBold':'Montserrat-Medium',color:'black'}}>Home</Text>
                </View>
            )}} component={HomeScreen}/>
            <tabs.Screen name="Chat"  options={{tabBarIcon:({focused})=>(
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    {focused?
                    <Ionicons name="chatbubble" color={'black'} size={responsiveHeight(2.7)}/>
                    :
                    <Ionicons name="chatbubble-outline" color={'black'} size={responsiveHeight(2.7)}/>
                    }
                    <Text style={{fontSize:focused?responsiveWidth(2.8):responsiveWidth(2.5),fontFamily:focused?'Montserrat-SemiBold':'Montserrat-Medium',color:'black'}}>Chat</Text>    
                </View>
            )}}  component={ChatScreen}/>
            <tabs.Screen name="Sells" options={{tabBarIcon:({focused})=>
                (
                   
                    <View style={style.main}>
                    <View style={style.butt}>
                        <FontAwesome5 name="plus" color={'black'} size={responsiveHeight(2)}/>
                    </View>
                    <Text style={{position:'absolute',fontSize:responsiveWidth(3),color:'black'}}>
                        Sell
                    </Text>
                    </View>
                    
                    
                )
                
            }} component={SellsScreen}/>
            <tabs.Screen name="Myadd" options={{tabBarIcon:({focused})=>(
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    {focused?
                    <Ionicons name="heart" color={'black'} size={responsiveHeight(3)}/>
                    :
                    <Ionicons name="heart-outline" color={'black'} size={responsiveHeight(3)}/>
                    }
                    <Text style={{fontSize:focused?responsiveWidth(2.8):responsiveWidth(2.5),fontFamily:focused?'Montserrat-SemiBold':'Montserrat-Medium',color:'black'}}>My Adds</Text>    
                </View>
            )}}  component={MyaddScreen}/>
            <tabs.Screen name="account" options={{tabBarIcon:({focused})=>(
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    {focused?
                    <FontAwesome name="user" color={'black'} size={responsiveHeight(2.7)}/>
                    :
                    <FontAwesome name="user-o" color={'black'} size={responsiveHeight(2.7)}/>
                    }
                    <Text style={{fontSize:focused?responsiveWidth(2.8):responsiveWidth(2.5),fontFamily:focused?'Montserrat-SemiBold':'Montserrat-Medium',color:'black'}}>Accounts</Text>    
                </View>
            )}}  component={AccountScreen}/>    
        </tabs.Navigator>
    )
}
const style=StyleSheet.create({
    main:{
        alignItems:'center'
    },
    butt:{
        backgroundColor:'white',
        height:responsiveWidth(14),
        width:responsiveWidth(14),
        borderRadius:responsiveWidth(7),
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'blue',
        borderWidth:responsiveWidth(1),
        bottom:responsiveHeight(0.2),
    }
})
export default MainTab;