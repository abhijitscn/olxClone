import React,{useState,useEffect} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from '../Screens/SplashScreen';
import MainTab from './MainTab'

type RootStackParamList = {
    Splash:undefined,
    Tab:undefined
  };
const MainRouteStack=()=>{
    const [isSplash,setIsSplash]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{setIsSplash(false)},3000)
    },[])
    const stackNavigation=createNativeStackNavigator()
    return(
        <NavigationContainer>
            <stackNavigation.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
                {isSplash?
                <stackNavigation.Screen name="Splash" component={SplashScreen}/>
                :null}
                <stackNavigation.Screen name="Tab" component={MainTab}/>
            </stackNavigation.Navigator>
        </NavigationContainer>
    )
}
export default MainRouteStack;