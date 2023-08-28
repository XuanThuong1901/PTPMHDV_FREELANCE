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
import {images, colors, icons, fontSizes} from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Mission(props) {

  let {mission, purview} = props.missions;

  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 3,
        marginRight: 10,
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontSize: fontSizes.h5,
          color: colors.black,
        }}>
        {mission}
      </Text>

      <Text
        style={{
          fontSize: fontSizes.h5,
          fontWeight: 'bold',
          color: colors.black,
        }}>
        {purview}
      </Text>
    </View>
  );
}


