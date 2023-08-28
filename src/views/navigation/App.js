import React, {useState, useEffect, Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackRouter } from 'react-navigation';
import store from '../../redux/store';

import {Login, Register, ResetPassword, Infor, Experience, Education, Skill, DetailOrder} from '../screens';
import UITab from './UITab';
import { colors } from '../constants';
import ListItem from '../screens/listItem/ListItem';
import CUProfile from '../screens/profileUser/freelance/profile/CUProfile';
import CUGit from '../screens/profileUser/freelance/profile/CUGit';
import DetailCategory from '../screens/search/DetailCategory';
import Messenger from '../screens/inbox/Messenger';
import DetailItem from '../screens/listItem/DetailItem';
import Upgrade from '../screens/order/Upgrade';
import Order from '../screens/order/OrderReview';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ShowGit from '../screens/profileUser/freelance/profile/ShowGit';
import DetailOffer from '../screens/manageOrders/Offer/DetailOffer';
const Stack = createNativeStackNavigator();
const screenOptions = ({route}) =>({
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarActiveTintColor: colors.inactive,
    
})
function App(props){

    // return (<Stack.Screen name={'Experience'} component={Experience}/>
    // <Stack.Screen name={'Education'} component={Education}/>
    // <Stack.Screen name={'Skill'} component={Skill}/>
    return(    <Provider store={store}>
            <NavigationContainer independent={true}>
                <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
                    <Stack.Screen name={'Login'} component={Login}/>
                    <Stack.Screen name={'Register'} component={Register}/>
                    <Stack.Screen name={'ResetPassword'} component={ResetPassword}/>
                    <Stack.Screen name={'UITab'} component={UITab}/>
                    <Stack.Screen name={'ListItem'} component={ListItem}/>
                    <Stack.Screen name={'DetailItem'} component={DetailItem}/>
                    <Stack.Screen name={'DetailOrder'} component={DetailOrder}/>
                    <Stack.Screen name={'DetailOffer'} component={DetailOffer}/>
                    <Stack.Screen name={'Infor'} component={Infor} key={'Infor'}/>
                    <Stack.Screen name={'CUProfile'} component={CUProfile}/>
                    <Stack.Screen name={'CUGit'} component={CUGit}/>
                    <Stack.Screen name={'ShowGit'} component={ShowGit}/>
                    <Stack.Screen name={'DetailCategory'} component={DetailCategory}/>
                    
                    <Stack.Screen name={'Messenger'} component={Messenger}/>
                    <Stack.Screen name={'Upgrade'} component={Upgrade}/>
                    <Stack.Screen name={'OrderReview'} component={Order}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App;