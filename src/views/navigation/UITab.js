import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';

import {User, ManageOrder, Home, Inbox, Search} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {fontSizes, icons, colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainManage from '../screens/manageOrders/MainManage';
import { useRoute } from '@react-navigation/native';

export const cookies = {}
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: colors.continues,
  tabBarInactiveTintColor: colors.placehoder,
  tabBarIcon: ({focused, color, size}) => {
    let screenName = route.name;
    let iconName = 'facebook';
    if (screenName == 'Home') {
      iconName = icons.home;
    } else if (screenName == 'User') {
      iconName = icons.user;
    } else if (screenName == 'Manage') {
      iconName = icons.checklist;
    } else if (screenName == 'Inbox') {
      iconName = icons.messages;
    } else if (screenName == 'Search') {
      iconName = icons.search;
    }
    return (
      <Image
        style={{
          width: 25,
          height: 25,
          resizeMode: 'cover',
        }}
        source={iconName}
      />
    );
  },
});

function UITab(props) {
  const route = useRoute();
  // const {cookie} = route.params;
  // const cookie = 'aaaa'
  // console.log('token1',cookie);
  // cookies.cookie = route.params;
  const {cookie} = route.params;
  cookies.cookie = cookie;

      return (
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name={'Home'} component={Home} initialParams={{cookie: cookie}}/>
          <Tab.Screen name={'Inbox'} component={Inbox} initialParams={{cookie: cookie}}/>
          <Tab.Screen name={'Search'} component={Search} initialParams={{cookie: cookie}}/>
          <Tab.Screen name={'Manage'} component={MainManage} initialParams={{cookie: cookie}}/>
          <Tab.Screen name={'User'} component={User} initialParams={{cookie: cookie}}/>
        </Tab.Navigator>
      );
    
  
}



export default UITab;
