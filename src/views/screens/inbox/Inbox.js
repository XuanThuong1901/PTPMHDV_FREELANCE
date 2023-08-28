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
import ChatItem from './ChatItem';
import Chat from './Chat';
import Notification from './Notification';
export default function Inbox(props) {
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;

  const [colorNotification, setColorNotification] = useState(colors.continues);
  const [colorChat, setColorChat] = useState(colors.placehoder);

  function onPressColorNotification() {
    setColorNotification(colors.continues);
    setColorChat(colors.placehoder);
  }
  function onPressColorChat() {
    setColorNotification(colors.placehoder);
    setColorChat(colors.continues);
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 0.08,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: colors.placehoder,
        }}>
        <Text
          style={{
            fontSize: fontSizes.h3,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Inbox
        </Text>
      </View>

      <View
        style={{
          flex: 0.93,
        }}>
            <View
            style={{
              height: 45,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.5,
                borderBottomColor:
                  colorNotification === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorNotification}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorNotification,
                }}>
                Notification
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.5,
                borderBottomColor:
                  colorChat === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorChat}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorChat,
                }}>
                Chat
              </Text>
            </TouchableOpacity>
            </View>
            {colorChat == colors.continues ? <Chat navigation = {navigation}/> : <Notification/>}
        </View>
    </View>
  );
}
