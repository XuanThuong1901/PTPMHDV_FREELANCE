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
import Target from './target';

export default function Item(props) {

  const {onPress} = props
  let {jobName, userName, avatar, image, price } = props.git;
  avatar = images.avatar;
  const [buttonHeart, setButtonHeart] = useState(icons.heart);
  const onPressButtonHeart = () => {
    if (buttonHeart === icons.heart) {
      setButtonHeart(icons.heart1);
    } else {
      setButtonHeart(icons.heart);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 110,
        flexDirection: 'row',
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: 'white',
      }}>
      <Image
        style={{
          borderRadius: 5,
          width: 110,
          height: 110,
        }}
        source={image}
      />
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginTop: 5,
          }}>
          <Image
            style={{
              width: 25,
              height: 25,
              borderRadius: 20,
              marginRight: 5,
            }}
            source={avatar}
          />
          <Text
            style={{
              flex: 0.8,
              fontSize: fontSizes.h6,
            }}>
            {userName}
          </Text>
          <TouchableOpacity
            style={{
              flex: 0.1,
            }}
            onPress={onPressButtonHeart}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginRight: 5,
              }}
              source={buttonHeart}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              color: colors.toolbar,
              marginHorizontal: 10,
            }}>
            {jobName}
          </Text>
        </View>
        <View
          style={{
            marginRight: 10,
            marginBottom: 5,
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
          }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              fontWeight: 'bold',
              color: 'black',
            }}>
            From US${price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
