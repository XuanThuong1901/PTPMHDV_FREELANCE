import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import DocumentPicker from 'react-native-document-picker';
import {images, colors, icons, fontSizes} from '../../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ModalPickerLevel} from './ModalPickerLevel';
import axios from 'axios';
import {url} from '../../../../utilies/axios';
import {useRoute} from '@react-navigation/native';
export default function CUProfile(props) {
  // props
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;
  const route = useRoute();
  const {cookie, occupation ,skill, avatar, level, loading} = route.params;

  const [imageUri, setImageUri] = useState(avatar);
  const [newSkill, setSkill] = useState(skill);
  const [newOccupation, setOccupation] = useState(occupation);

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

  const [chosseLevel, setChosseLevel] = useState(
    level === '' ? 'Select Level' : level,
  );
  const [isModalVisible, setisModalVisible] = useState(false);
  const openModalVisible = () => {
    setisModalVisible(true);
  };
  const closeModalVisible = () => {
    setisModalVisible(false);
  };
  const setData = option => {
    setChosseLevel(option);
  };

  const updateProfile = async () => {
    try {
      let response = await axios.post(
        `${url}/user/create-profile`,
        {avatar: imageUri, mySkill: newSkill, occupation: newOccupation, level: chosseLevel},
        {
          headers: {
            Authorization: `Bearer ${cookie}`,
          },
        },
      );
      loading();
      Alert.alert('Cập nhật thông tin thành công');
      navigate('User')
    } catch (error) {}
  };

  // useEffect(() => {
  //   selectInfor();
  // },[]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.ghostWhite,
      }}>
      <View
        style={{
          flex: 0.08,
          marginHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: colors.inactive,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'flex-start',
          }}
          onPress={() => {
            goBack();
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
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontSizes.h3,
              color: colors.black,
              fontWeight: 'bold',
            }}>
            Profile
          </Text>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderRadius: 5,
          }}
          onPress={() => {
            updateProfile();
          }}>
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: colors.continues,
              fontWeight: 'bold',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.93,
        }}>
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                marginTop: 20,
                width: 70,
              }}>
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
                onPress={pickImage}>
                <Text
                  style={{
                    fontSize: fontSizes.h5,
                    color: colors.continues,
                  }}>
                  Add image Git
                </Text>
              </TouchableOpacity>
            </View>
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
              Occupation
            </Text>
            <TextInput
              value={newOccupation}
              onChangeText={text => setOccupation(text)}
              placeholder="Occupation"
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
              Skill
            </Text>
            <TextInput
              value={newSkill}
              onChangeText={text => setSkill(text)}
              placeholder="Skill"
              placeholderTextColor={colors.placehoder}
              style={{
                color: colors.black,
                backgroundColor: colors.inactive,
                height: 100,
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
              Level
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 5,
                paddingVertical: 10,
                backgroundColor: colors.inactive,
                borderRadius: 10,
              }}
              onPress={openModalVisible}>
              <Text
                style={{
                  marginLeft: 10,
                  color: colors.black,
                  fontSize: fontSizes.h5,
                }}>
                {chosseLevel}
              </Text>
            </TouchableOpacity>
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              nRequestClose={() => closeModalVisible}>
              <ModalPickerLevel
                openModalVisible={openModalVisible}
                closeModalVisible={closeModalVisible}
                setData={setData}
              />
            </Modal>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
