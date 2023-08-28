/**
 * @format
 */
import React, {useState, useEffect, Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native';
import axios from 'axios';
// import CookieManager from 'react-native-cookies';
import Icon from 'react-native-vector-icons/FontAwesome';
import {images, icons, fontSizes, colors} from '../constants';
import {isValidEmail, isValidPassword} from '../utilies/validation';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginUser,
} from '../../redux/actions/LoginAction';
import {connect} from 'react-redux';
import { accounts } from './DataTest';
import { url } from '../utilies/axios';
// import {checkLogin}  from './DataTest';
function Login(props) {
  const {onPress, navigation} = props;
  const {navigate, goBack} = navigation;


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorLogin, setErroLogin] = useState(false);


  const onPressLogin = async () =>{
    // navigate('UITab', '1234'); 
    try{
        let response = await axios.post(`${url}/auth/login`
        , { email, password })
        console.log(response);
        if(response == null){
          setErroLogin(true)
          return;
        }
        const cookie = response.data.access_token
        console.log(response.data);
        console.log(cookie);
        navigate('UITab', {cookie});

    }catch(error){
      navigate('UITab');
      setErroLogin(true)
    }
  }


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
              marginTop: 80,
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
              Please enter email and password.
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
            onChangeText={text => setPassword(text)}
            placeholder="Mật khẩu"
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
              backgroundColor: colors.continues,
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              borderRadius: 5,
              marginTop: 35,
            }}
            onPress={() => {
              onPressLogin();
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h5,
                color: 'white',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
          {errorLogin == true ? (
            <View
              style={{
                alignItems: 'flex-end',
                marginTop: 5,
                marginEnd: 20,
              }}>
              <Text
                style={{
                  color: colors.red,
                  fontSize: fontSizes.h5,
                }}>
                Wrong email or password
              </Text>
            </View>
          ) : (
            <View></View>
          )}
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
              navigate('Register');
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h5,
                color: colors.continues,
              }}>
              Sign up
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
              navigate('ResetPassword');
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h5,
                color: colors.continues,
              }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
});

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(loginUser({email, password})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);


