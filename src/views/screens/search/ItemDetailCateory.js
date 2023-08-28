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
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ItemDetailCategory(props) {
  let {categoryDetailName} = props.categoryDetail;
  const {onPress} = props;
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        height: 50,
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Text
          style={{
            fontSize: fontSizes.h5,
            fontWeight: 'bold',
            color: colors.black,
          }}>
          {categoryDetailName}
        </Text>
        <Image
        style={{
          height: 15,
          width: 15,
        }}
        source={icons.angle_right}
      />
    </TouchableOpacity>
  );
}
