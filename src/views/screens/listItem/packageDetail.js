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
  Dimensions,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Request from './Request';
import {useRoute} from '@react-navigation/native';

export default function DetailPackage(props) {

  let {packageId, revision, deliveryDay} = props.package
  

  return (
    <View
      style={{
        margin: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
            marginRight: 5,
          }}
          source={icons.king}
        />
        <Text
          style={{
            fontSize: fontSizes.h5,
            color: colors.black,
            fontWeight: 'bold',
          }}>
          {packageId === '1' ? 'Basic Package' : (packageId === '2' 
          ? 'Standard Package' : 'Premium Package')}
        </Text>
      </View>
      <Text
        style={{
          marginTop: 10,
          fontSize: fontSizes.h5,
          color: colors.black,
        }}>
        
      </Text>
      <View style={{
        flex: 1,
      }}>
      <FlatList
        data={props.request}
        renderItem={({item}) => (
          <Request request={item} key={item.nameRequest} />
        )}
        style={{flex: 1}}></FlatList>
      </View>
      
    </View>
  );
}