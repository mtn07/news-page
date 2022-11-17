import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import App from "./App";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" Component={App}/>
        </Tab.Navigator>
    );
};

export default BottomTab;

const styles = StyleSheet.create({});

