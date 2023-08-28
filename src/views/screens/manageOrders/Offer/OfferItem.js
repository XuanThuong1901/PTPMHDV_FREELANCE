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
  Platform,
} from 'react-native';
import {images, icons, fontSizes, colors} from '../../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UIButoon} from '../../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {isValidEmail, isValidPassword} from '../../../utilies/validation';

export default function OfferItem(props) {
  let {
    customer_name,
    avatar,
    status_order,
    delivery_day,
    total_price,
    post_name,
  } = props.offer; // destructuring an object
  let {image} = props;
  const {onPress} = props;
  return (

      <TouchableOpacity
      onPress={onPress}
        style={{
          height: 140,
          marginTop: 10,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: colors.inactive,
        }}
        >
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 10,
          }}>
          <Image
            style={{
              borderRadius: 5,
              height: 50,
              width: 70,
            }}
            source={image}
          />
          <View
            style={{
              flex: 1,
              marginStart: 10,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                fontWeight: 'bold',
                color: 'black',
              }}>
              {total_price} $
            </Text>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.toolbar,
              }}>
              {post_name}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginTop: 5,
          }}>
          <Image
            style={{
              width: 25,
              height: 25,
              borderRadius: 20,
              marginRight: 5,
            }}
            source={images.avatar}
          />
          <Text
            style={{
              fontSize: fontSizes.h6,
            }}>
            {customer_name}
          </Text>
          <View style={{flex: 1}} />
          <Text
            style={{
              fontSize: fontSizes.h6,
              fontWeight: 'bold',
              backgroundColor: colors.inactive,
              color: colors.continues,
              marginRight: 10,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}>
            {status_order}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {delivery_day}
          </Text>
          <View style={{flex: 1}} />
          <TouchableOpacity
            style={{
              marginRight: 5,
            }}>
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={icons.dots}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
  );
}
