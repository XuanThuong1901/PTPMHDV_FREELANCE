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

export default function ItemSearch(props) {
  let {categoryID, categoryName, description, url} = props.category;
  const {onPress} = props;
  return (
    <TouchableOpacity
    onPress={() => onPress(categoryID, url)}
      style={{
        height: 70,
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        borderBottomColor: colors.inactive,
        borderBottomWidth: 1,
      }}>
      <Image
        style={{
          marginHorizontal: 20,
          height: 35,
          width: 35,
        }}
        source={url}
      />
      <View
        style={{
        }}>
        <Text
          style={{
            fontSize: fontSizes.h4,
            fontWeight: 'bold',
            color: colors.black,
          }}>
          {categoryName}
        </Text>
        <Text
          style={{
            fontSize: fontSizes.h5,
            color: colors.black,
          }}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
