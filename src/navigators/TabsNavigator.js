import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Settings} from "../screens";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { LoggedInStackNavigator } from "./StackNavigator";

export default function TabsNavigator() {
  const Tabs = createBottomTabNavigator();

  
  return (
    <Tabs.Navigator 
      initialRouteName="Dashboard" 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
            backgroundColor: "white",
            height: 80,
            paddingBottom: 10,
            padding: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginHorizontal: 5,
            position: "absolute",
            borderColor: "white",
            elevation: 10,
        },
        tabBarButton: (props)=>{
          return (
            <View {...props}>
                <View
                    style={{
                        minWidth: 50,
                        minHeight: 50,
                        borderRadius: 10,
                        backgroundColor: 
                        props.accessibilityState.selected
                            ? "#34a1eb"
                            : "white",
                    }}
                >
                    <TouchableOpacity {...props} />
                </View>
            </View>
        );
        }
      }}>
        <Tabs.Screen name="Home" component={LoggedInStackNavigator} options={{
            tabBarIcon: ({ color }) => (
                  <Ionicons name="ios-home-outline" size={24} color={color} />
        )}}/>

        <Tabs.Screen name="Settings" component={Settings} options={{
        tabBarIcon: ({color})=>(
          <Ionicons name="settings-outline" size={24} color={color} />
        )}}/>

    </Tabs.Navigator>
  )
}
