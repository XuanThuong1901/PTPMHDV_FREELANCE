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
  Button,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import ReadMore from 'react-native-read-more-text';
import {images, colors, icons, fontSizes} from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Offer(props) {
  
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      setImageUri(res.uri);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the image picker');
      } else {
        console.log('Error: ', error);
      }
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.ghostWhite,
      }}>
      <View
        style={{
          flex: 0.08,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: colors.placehoder,
        }}>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignItems: 'flex-start',
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={icons.back}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 0.9,
            alignItems: 'center',
            marginLeft: -20,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: colors.black,
              fontWeight: 'bold',
            }}>
            Create A Custom Offer
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.93,
        }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 10,
              marginTop: 15,
            }}>
            <View>
              {imageUri && (
                <Image
                  source={{uri: imageUri}}
                  style={{width: 70, height: 70}}
                />
              )}
              <TouchableOpacity
                style={{
                    padding: 3,
                  borderRadius: 3,
                  borderWidth: 1,
                  borderColor: colors.continues,
                }}
                onPress={pickImage}
                >
                <Text
                  style={{
                    fontSize: fontSizes.h6,
                    color: colors.continues,
                  }}>
                  Add Img
                </Text>
              </TouchableOpacity>

            </View>
            <TextInput
              placeholder="Describe Your Offer"
              placeholderTextColor={colors.placehoder}
              style={{
                flex: 1,
                marginLeft: 10,
                fontSize: fontSizes.h5,
                color: colors.black,
                borderColor: colors.placehoder,
                borderWidth: 1,
                height: 70,
                borderRadius: 3,
              }}
            />
          </View>

          
        </ScrollView>
      </View>
    </View>
  );
}
