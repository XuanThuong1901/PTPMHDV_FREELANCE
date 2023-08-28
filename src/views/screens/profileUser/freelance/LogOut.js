import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../../../constants';


const options = ['Log Out','Exit']

const WHITE = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const LogOut = (props) => {
  const onPressItem = (option) => {
    props.closeModalVisible();
    props.setData(option);
  };
  const option = options.map((item, index) => {
    return (
      <TouchableOpacity style={{
        marginVertical: 10,
        marginHorizontal: 20,
      }} key={index} onPress={() => onPressItem(item)}>
        <Text style={{
            color: colors.black,
            fontWeight: 'bold' 
        }}>{item}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity style={{
        marginTop:  40,
        marginLeft: 250,
        borderRadius: 10,
        backgroundColor: colors.inactive,
      }} onPress={() => props.closeModalVisible()}>
      <View >
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export {LogOut};
