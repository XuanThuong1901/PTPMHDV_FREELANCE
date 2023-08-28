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

export default function OrderSummary(props) {

    let {summary, price} = props.summarys
  return (
    <View style={{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: 10,
      marginBottom: 5,
    }}>
    
      <View style={{
        flex: 0.8,
      }}>
      <Text
      style={{
        color: colors.black,
        fontSize: fontSizes.h5,
      }}>
      {summary}
    </Text>
      </View>
      <View style={{
        flex: 0.2,
        alignItems: 'flex-end',
      }}>
      {price ==='' ? <Text/> :<Text
      style={{
        color: colors.black,
        fontSize: fontSizes.h5,
      }}>
      US${price}
    </Text> }
      </View>
    
    </View>
    
  );
}
