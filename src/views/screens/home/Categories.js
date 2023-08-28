import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Categories(props) {
  let {categoryDetailName, image} = props.categories; //destructuring an object
  const {onPress} = props 
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        marginHorizontal: 5,
        width: 100,
        height: 120,
        backgroundColor: 'white',
        borderRadius: 5,
      }}>
      <Image
        style={{
          width: 100,
          height: 70,
          resizeMode: 'cover',
          borderRadius: 5,
        }}
        source={{
          uri: image,
        }}
      />
      <Text
        style={{
          margin: 5,
          marginTop: 10,
          color: 'black',
          fontSize: fontSizes.h6 ,
        }}>
        {categoryDetailName}
      </Text>
    </TouchableOpacity>
  );
}
