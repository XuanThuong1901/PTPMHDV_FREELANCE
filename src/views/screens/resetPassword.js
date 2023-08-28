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

export default function ResetPassword(props) {
  // props
  const {onPress, title, isSelected, navigation, route} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;

  //states for validating
  const [errorEmail, setErrorEmail] = useState('');

  // state to store email and password
  const [email, setEmail] = useState('');


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
              marginTop: 60,
              marginHorizontal: 20,
              marginBottom: 40,
            }}>
            <Text
              style={{
                color: colors.continues,
                fontSize: fontSizes.h2,
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
              Please enter your registration email Forgot Password.
            </Text>
          </View>
          
          
          <TextInput
            // onChangeText={text => {
            //   setErroEmail(
            //     isValidEmail(text) == true ? '' : 'Email not in corect format',
            //   );
            //   setEmail(text);
            // }}
            style={{
              backgroundColor: colors.inactive,
              height: 40,
              borderRadius: 10,
              paddingStart: 10,
              color: colors.black,
              marginHorizontal: 15,
              marginTop: 60,
            }}
            placeholder="Enter your email "
            placeholderTextColor={colors.placehoder}
          />
            
           <TouchableOpacity
            // disabled={isValidationOK() == false}
            style={{
              backgroundColor: colors.continues,
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 5,
              marginTop: 35,
            }}

            onPress={() => {
            alert('Your password has been sent to your email!');
             goBack()
            }}
          >
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h5,
                color: 'white',
              }}>
              Reset Password
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
              goBack()
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
              goBack()
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
