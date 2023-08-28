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
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Target(props) {

    const {name} = props.target;

  const [buttonColor, setButtonColor] = useState(colors.inactive);
  const onPressButton = item => {
    if (buttonColor === colors.inactive) {
        setButtonColor(colors.continues);
    } else {
        setButtonColor(colors.inactive);
    }
  };

  return (
    <TouchableOpacity
      // onPress={onPressButton(item)}
      style={{
        height: 28,
        marginHorizontal: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: buttonColor,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPressButton}>
      <Text
        style={{
          paddingHorizontal: 15,
          fontWeight: 'bold',
          color: 'black',
          fontSize: fontSizes.h6 * 0.8,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}
