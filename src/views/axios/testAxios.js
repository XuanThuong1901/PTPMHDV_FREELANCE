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
import {images, icons, fontSizes, colors} from '../constants';

import {
  user as UserRepository,
} from './repositories'


export default function Test(props){
    const [user, setUser] = useState()
    useEffect(() => {
       UserRepository.getUserDetail().then(responseUser => setUser(responseUser))
       
    }, [])
    // UserRepository.getUserDetail()

    // Tạo ra các const cùng tên với các giá trị ta lấy từ bên response
    

    // nếu kiểu là Date ta có thể dùng: JSON.stringify(tham số) để chuyển sang text
    // Hoặc có thể tạo hàm conver Date 

    // trong thẻ Image : để căn giữa ta có thể dùng thẻ alignSelf
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.facebook,
      }}>
      
    </View>
  );
}
