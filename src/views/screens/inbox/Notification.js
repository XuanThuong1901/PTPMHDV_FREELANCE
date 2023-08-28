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
import NotificationItem from './NotificationItem';
export default function Notification(props) {
  //   const {onPress, navigation} = props
  //      // funciton of navigate to/back
  //     const {navigate, goBack} = navigation;

  // const {onPress} = props;

  const [notifications, setNotifications] = useState([
    {
      key: 1,
      nameNoti: 'Hôm nay tôi sẽ có người yêu',
      content: 'Chiều hôm nay vào 15h tôi gặp được định mệnh của đời mình',
      time: '15:12:43 20/5/2023',
    },
    {
      key: 2,
      nameNoti: 'Hôm nay tôi sẽ có người yêu',
      content: 'Chiều hôm nay vào 15h tôi gặp được định mệnh của đời mình',
      time: '15:12:43 20/5/2023',
    },
    {
      key: 3,
      nameNoti: 'Hôm nay tôi sẽ có người yêu',
      content: 'Chiều hôm nay vào 15h tôi gặp được định mệnh của đời mình',
      time: '15:12:43 20/5/2023',
    },
    {
      key: 4,
      nameNoti: 'Hôm nay tôi sẽ có người yêu',
      content: 'Chiều hôm nay vào 15h tôi gặp được định mệnh của đời mình',
      time: '15:12:43 20/5/2023',
    },
    {
      key: 5,
      nameNoti: 'Hôm nay tôi sẽ có người yêu',
      content: 'Chiều hôm nay vào 15h tôi gặp được định mệnh của đời mình',
      time: '15:12:43 20/5/2023',
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        style={{}}
        data={notifications}
        renderItem={({item}) => <NotificationItem notification={item} key={item.key} />}
      />
    </View>
  );
}
