import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../../constants';
const WHITE = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


const ModalPickerUser = (props) => {

    const [user, setUser] = useState('freelance');
    const onPressUser = () => {
        if(user ==='freelance') setUser('recruitment');
        else setUser('freelance');
    }

    const option1 = () => {
        return (
            <TouchableOpacity style={{
              marginVertical: 10,
              marginHorizontal: 20,
            }} onPress={() => onPressUser}>
              <Text style={{
                  color: colors.black, 
              }}>{user}</Text>
            </TouchableOpacity>
          );
    }

  // const option = ((item, index) => {
  //   return (
  //     <TouchableOpacity style={{
  //       marginVertical: 10,
  //       marginHorizontal: 20,
  //     }} key={index} onPress={() => onPressUser}>
  //       <Text style={{
  //           color: colors.black, 
  //       }}>{user}</Text>
  //     </TouchableOpacity>
  //   );
  // });

  return (
    <TouchableOpacity style={{
        marginLeft: WHITE/2,
        marginTop: 40,
        backgroundColor: colors.facebook,
      }} onPress={() => props.closeModalVisible()}>
      <View >
      <TouchableOpacity style={{
              marginVertical: 10,
              marginHorizontal: 20,
            }} onPress={() => onPressUser}>
              <Text style={{
                  color: colors.black, 
              }}>{user}</Text>
            </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export {ModalPickerUser};
