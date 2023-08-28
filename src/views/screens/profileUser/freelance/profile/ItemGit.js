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
import {icons, images, colors, fontSizes} from '../../../../constants';

export default function ShowGit(props) {
  
  const {onPress} = props;
  let {postName, image, categoryDetail} = props.post;
  
  const handleTouchableOpacityShow = () => {
    onPress('ShowGit')
  } 

  const handleTouchableOpacityUpdate = () => {
    onPress('CUGit')
  }
  const handleTouchableOpacityDelete = () => {
    onPress('DeleteGit')
  }


  return (
    <TouchableOpacity
      onPress={handleTouchableOpacityShow}
      style={{
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        marginHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.inactive,
      }}>
        <View style={{ flex : 0.3}}>
          <Image style={{
            width: 80,
            height:60,
          }} source={image}/>
        </View>
      <View style={{ flex : 0.65}}>
        <Text
          style={{
            fontSize: fontSizes.h4,
            color: colors.black,
            fontWeight: 'bold',
          }}>
          {postName}
        </Text>
        <View
          style={{
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.black,
            }}>
            {categoryDetail}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.05,
          alignItems: 'flex-end',
        }}>
          <TouchableOpacity
        onPress={handleTouchableOpacityUpdate}
        style={{
          marginBottom: 20,
        }}
        >
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={icons.pen}
          />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={handleTouchableOpacityDelete}
        style={{
          // marginBottom: 20,
        }}
        >
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={icons.delete}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
