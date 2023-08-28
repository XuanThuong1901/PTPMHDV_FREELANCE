import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
  Pressable,
} from 'react-native';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import {images, icons, fontSizes, colors} from '../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UIButoon} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  isValidEmail,
  isValidPassword,
  isValidRePassword,
} from '../utilies/validation';
import { url } from '../utilies/axios';

export default function Register(props) {
  // props
  const {onPress, title, isSelected, navigation, route} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;

  //states for validating
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorRePassword, setErrorRePassword] = useState('');
  // state to store email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const isValidationOK = () =>
    email.length > 0 &&
    password.length >= 6 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true &&
    isValidRePassword(rePassword, password) == true;

  const onPressRegister = async () => {
    try {
      let response = await axios.post(
        `${url}/api/auth/register`,
        {email, password},
      );
      console.log(response);
      console.log('helohlo');
      if (response == null) {
        return;
      }
      const cookie = response.data.access_token;
      navigate('Login');
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 0.9,
        }}>
        <ScrollView>
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 20,
              marginBottom: 30,
            }}>
            <Text
              style={{
                color: colors.continues,
                fontSize: fontSizes.h1,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Welcome to FREELANCE
            </Text>
            <Text
              style={{
                color: colors.continues,
                fontSize: fontSizes.h4,
                marginTop: 10,
              }}>
              Please enter registration information.
            </Text>
          </View>

          <TextInput
            onChangeText={text => setEmail(text)}
            style={{
              backgroundColor: colors.inactive,
              height: 40,
              borderRadius: 10,
              paddingStart: 10,
              color: colors.black,
              marginHorizontal: 15,
              marginTop: 15,
            }}
            placeholder="Email or Username"
            placeholderTextColor={colors.placehoder}
          />
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 6 characters',
              );
              setPassword(text);
            }}
            placeholder="Mật khẩu mới"
            placeholderTextColor={colors.placehoder}
            style={{
              color: colors.black,
              backgroundColor: colors.inactive,
              height: 40,
              borderRadius: 10,
              paddingStart: 10,
              marginHorizontal: 15,
              marginTop: 15,
            }}
            secureTextEntry={true}
          />
          <TextInput
            onChangeText={text => {
              setErrorPassword(
                isValidPassword(text) == true
                  ? ''
                  : 'Password must be at least 6 characters',
              );
              setPassword(text);
            }}
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor={colors.placehoder}
            style={{
              color: colors.black,
              backgroundColor: colors.inactive,
              height: 40,
              borderRadius: 10,
              paddingStart: 10,
              marginHorizontal: 15,
              marginTop: 15,
            }}
            secureTextEntry={true}
          />
          <TouchableOpacity
            // disabled={isValidationOK() == false}
            style={{
              marginBottom: 40,
              backgroundColor: colors.continues,
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 5,
              marginTop: 35,
            }}
            onPress={() => {
              onPressRegister();
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h5,
                color: 'white',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
        }}>
        <View style={{}}>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              marginTop: 15,
              marginLeft: 5,
            }}
            onPress={() => {
              goBack();
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h5,
                color: colors.continues,
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
          }}
        />
        <View style={{}}>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              marginTop: 15,
              marginRight: 10,
            }}
            onPress={() => {
              goBack();
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h5,
                color: colors.continues,
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
