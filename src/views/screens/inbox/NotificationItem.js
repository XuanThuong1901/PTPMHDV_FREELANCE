import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

function NotificationItem(props) {
  let {
    nameNoti,
    content,
    time,
    // userId,
  } = props.notification; //destructuring an object
  // const {onPress} = props
  return (
    <View
      style={{
        paddingTop: 10,
        paddingStart: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.inactive,
      }}>
      <Text
        style={{
            flex: 1,
          color: colors.black,
          fontSize: fontSizes.h5,
          fontWeight: 'bold',
        }}>
        {nameNoti}
      </Text>
      <Text
        style={{
            flex: 1,
            marginTop: 2,
          color: colors.black,
          fontSize: fontSizes.h6,
        }}>
        {content}
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            marginTop: 10,
            color: colors.placehoder,
            fontSize: fontSizes.h6 * 0.8,
            marginRight: 10,
          }}>
          {time}
        </Text>
      </View>
    </View>
  );
}
export default NotificationItem;
