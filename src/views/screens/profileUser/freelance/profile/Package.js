import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import DocumentPicker from 'react-native-document-picker';
import {images, colors, icons, fontSizes} from '../../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ModalPickerLevel} from './ModalPickerLevel';
export default function Package({packages, updatePackage}) {

    const handlePriceChange = (newPrice) => {
        const updatedValues = { ...packages, unit_price: parseInt(newPrice) };
        updatePackage(updatedValues);
      };
    
      const handleDeliveryDayChange = (newDeliveryDay) => {
        const updatedValues = {  ...packages, delivery_day: newDeliveryDay };
        updatePackage(updatedValues);
      };
    
      const handleRevisionChange = (newRevision) => {
        const updatedValues = {  ...packages, revision: newRevision };
        updatePackage(updatedValues);
      };

  return (
    <View
      style={{
        flex: 1,
        marginBottom: 30,
        backgroundColor: colors.ghostWhite,
      }}>
      
       
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.black,
                fontWeight: 'bold',
              }}>
              Price
            </Text>
            <TextInput
            value={packages.unit_price != null ? packages.unit_price.toString(): ''}
            onChangeText={(text)=>handlePriceChange(text)}
              placeholder="Price"
              placeholderTextColor={colors.placehoder}
              style={{
                color: colors.black,
                backgroundColor: colors.inactive,
                height: 40,
                borderRadius: 10,
                paddingStart: 10,
                marginTop: 5,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.black,
                fontWeight: 'bold',
              }}>
              Revision
            </Text>
            <TextInput
            value={packages.revision}
            onChangeText={(text) => handleRevisionChange(text)}
              placeholder="Revision"
              placeholderTextColor={colors.placehoder}
              style={{
                color: colors.black,
                backgroundColor: colors.inactive,
                height: 40,
                borderRadius: 10,
                paddingStart: 10,
                marginTop: 5,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.black,
                fontWeight: 'bold',
              }}>
              Delivery day
            </Text>
            <TextInput
            value={packages.delivery_day}
            onChangeText={(text) => handleDeliveryDayChange(text)}
              placeholder="Delivery day"
              placeholderTextColor={colors.placehoder}
              style={{
                color: colors.black,
                backgroundColor: colors.inactive,
                height: 40,
                borderRadius: 10,
                paddingStart: 10,
                marginTop: 5,
              }}
            />
          </View>
    </View>
  );
}

// const styles = () => {
    
// }
