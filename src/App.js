import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native'
import Routes from "./components/Routes/Index"

export default props => (
           
           <NavigationContainer>
                <StatusBar backgroundColor={"#00c293"} barStyle='light-content' />
                <Routes/>
            </NavigationContainer>
)
