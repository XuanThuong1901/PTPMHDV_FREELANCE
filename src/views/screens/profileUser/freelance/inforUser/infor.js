import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import {RadioButton } from '../../node_modules/react-native-paper/lib/module/components/RadioButton/RadioButton';
import {images, icons, fontSizes, colors} from '../../../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UIButoon} from '../../../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {isValidEmail, isValidPassword} from '../../../../utilies/validation';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {url} from '../../../../utilies/axios';

export default function Infor(props) {
  // console.log('acvcd',props);
  const navigation = useNavigation();
  // props
  // const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;
  const route = useRoute();
  const {cookie} = route.params;

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [education, setEducation] = useState('');
  const [dateOfBirth, setDataOfBirth] = useState('');
  const [sex, setSex] = useState('');

  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const toggleDatepocker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === 'android') {
        toggleDatepocker();
        setDataOfBirth(formatDate(currentDate));
      }
    } else {
      toggleDatepocker();
    }
  };

  const formatDate = rawDate => {
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}-${month}-${year}`;
  };

  const selectInfor = async () => {
    try {
      console.log('1234');
      console.log(cookie);
      let response = await axios.get(`${url}/user/get-user`, {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      });
      console.log(response);
      let userTemp = response.data;
      console.log(userTemp);
      setEmail(response.data.email);
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
      setEducation(response.data.education);
      setAddress(response.data.address);
      setDataOfBirth(response.data.birthday);
      setPhoneNumber(response.data.phone);
      setSex(response.data.gender);
    } catch (error) {}
  };

  const updateInfor = async () => {
    try {
      let response = await axios.post(
        `${url}/user/create-information`,
        {
          first_name: firstName,
          last_name: lastName,
          gender: sex,
          birthday: new Date(dateOfBirth),
          address: address,
          phone: phoneNumber,
          education: education,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie}`,
          },
        },
      );
      Alert.alert('Cập nhật thông tin thành công');
      goBack();
    } catch (error) {}
  };

  

  useEffect(() => {
    selectInfor();
  },[]);
  

  return (
    <View
      style={{
        backgroundColor: 'white',
      }}>
      <ScrollView>
        <View
          style={{
            padding: 10,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: colors.inactive,
          }}>
          <TouchableOpacity
            style={{flex: 0.1}}
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
            {/* <Icon name={'arrow'} size={20} color="black" /> */}
          </TouchableOpacity>
          <View
            style={{
              flex: 0.75,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: fontSizes.h3,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Infor User
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 0.15,
              height: 30,
              // backgroundColor: colors.continues,
              borderRadius: 5,
              alignItems: 'center',
            }}
            onPress={() => {
              updateInfor();
            }}>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: fontSizes.h3,
                color: colors.continues,
                fontWeight: 'bold',
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <View
            style={{
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images.avatar}
              style={{
                borderRadius: 50,
                height: 80,
                width: 80,
                marginRight: 10,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: colors.red,
              }}>
              Họ *
            </Text>
            <TextInput
              value={firstName}
              onChangeText={text => setFirstName(text)}
              style={{
                marginTop: 5,
                height: 40,
                color: colors.black,
                borderRadius: 5,
                borderColor: colors.inactive,
                borderWidth: 1,
              }}
              placeholder="Nhập họ"
            />
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: colors.red,
              }}>
              Tên *
            </Text>
            <TextInput
              value={lastName}
              onChangeText={text => setLastName(text)}
              style={{
                marginTop: 5,
                height: 40,
                color: colors.black,
                borderRadius: 5,
                borderColor: colors.inactive,
                borderWidth: 1,
              }}
              placeholder="Nhập tên"
            />
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: colors.black,
              }}>
              Giới tính
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              {['Nam', 'Nữ'].map(feeling => (
                <View
                  style={{
                    marginHorizontal: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginBottom: 5,
                      fontSize: fontSizes.h5,
                      color: colors.black,
                    }}>
                    {feeling}
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 1,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => setSex(feeling)}>
                    {sex === feeling && (
                      <View
                        style={{
                          width: 12,
                          height: 12,
                          backgroundColor: 'gray',
                          borderRadius: 10,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: colors.black,
              }}>
              Birthday
            </Text>
            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
                minimumDate={new Date()}
              />
            )}

            {!showPicker && (
              <Pressable onPress={toggleDatepocker}>
                <TextInput
                  style={{
                    marginTop: 5,
                    height: 40,
                    color: colors.black,
                    borderRadius: 5,
                    borderColor: colors.inactive,
                    borderWidth: 1,
                  }}
                  placeholder="19-1-2004"
                  value={new Date(dateOfBirth).toLocaleDateString('en-GB')}
                  onChangeText={setDataOfBirth}
                  placeholderTextColor={colors.placehoder}
                  editable={false}
                />
              </Pressable>
            )}
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: colors.black,
              }}>
              Địa chỉ
            </Text>
            <TextInput
              value={address}
              onChangeText={text => setAddress(text)}
              style={{
                marginTop: 5,
                height: 40,
                color: colors.black,
                borderRadius: 5,
                borderColor: colors.inactive,
                borderWidth: 1,
              }}
              placeholder="Nhập địa chỉ"
            />
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 50,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: colors.black,
              }}>
              Số điện thoại
            </Text>
            <TextInput
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              style={{
                marginTop: 5,
                height: 40,
                color: colors.black,
                borderRadius: 5,
                borderColor: colors.inactive,
                borderWidth: 1,
              }}
              placeholder="Nhập số điện thoại"
            />
          </View>
          <View
            style={{
              marginTop: 20,
              marginBottom: 50,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h4,
                color: colors.black,
              }}>
              Education
            </Text>
            <TextInput
              value={education}
              onChangeText={text => setEducation(text)}
              style={{
                marginTop: 5,
                height: 40,
                color: colors.black,
                borderRadius: 5,
                borderColor: colors.inactive,
                borderWidth: 1,
              }}
              placeholder="Nhập số trường, trung tâm"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
