import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ItemHome(props) {
  
  const {onPress} = props;
  let {jobName, userName, image, price } = props.git;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginBottom: 15,
        height: 240,
        width: 150,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: colors.inactive,
      }}>
      <View style={{}}>
        <Image
          style={{
            borderRadius: 5,
            height: 100,
            width: 150,
          }}
          source={image}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 5,
        }}>
        {/* <Image
          style={{
            width: 25,
            height: 25,
            borderRadius: 20,
            marginRight: 5,
          }}
          source={avatar}
        /> */}
        <Text
          style={{
            color: colors.black,
            fontSize: fontSizes.h6,
          }}>
          {userName}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: fontSizes.h5,
            color: colors.black,
            marginHorizontal: 10,
            marginVertical: 5,
          }}>
          {jobName}
        </Text>
      </View>
      <View
        style={{
          marginRight: 5,
          flex: 1,
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: fontSizes.h5,
            fontWeight: 'bold',
            color: 'black',
          }}>
          US${price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
