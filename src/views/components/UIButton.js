import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants';

function UIButoon(props) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected == true ? 'white' : 'blue',
      }}>
      {isSelected == true && (
        <Icon
          size={20}
          name={'check-circle'}
          style={{
            color: 'green',
            position: 'absolute',
            left: 10,
            top: 10,
          }}
        />
      )}
      <Text style={{color: isSelected == true ? colors.primary : 'white'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default UIButoon;
