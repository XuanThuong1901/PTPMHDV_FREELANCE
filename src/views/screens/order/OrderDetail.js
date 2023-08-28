import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function OrderDetail(props) {

  const {nameRequest, purview} = props.request;
  return (
    <View
      style={{
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontSize: fontSizes.h5,
          color: colors.black,
        }}>
        {nameRequest}
      </Text>
      {purview === true ? (
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={icons.check}
        />
      ) : purview === false ? (
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={icons.close}
        />
      ) : (
        <Text
          style={{
            fontSize: fontSizes.h5,
            fontWeight: 'bold',
            color: colors.black,
          }}>
          {purview}
        </Text>
      )}
    </View>
    
  );
}
