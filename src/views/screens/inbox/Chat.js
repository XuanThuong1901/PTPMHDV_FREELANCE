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
export default function Chat(props) {
  const {navigation} = props
  //    // funciton of navigate to/back
  //   const {navigate, goBack} = navigation;

  const [users, setUsers] = useState([
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      name: 'Amanda Weler',
      message: 'Hello, how are you ?',
      numberOfUnreadMessages: 3,
    },
    {
      url: 'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/269902044_1514290715614582_3485753137364176030_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MyUUwwygL4oAX-8jIb5&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfD8B1q7mbKihrXtuvXxGPdHejBB0JUGCDwDtqEim8pTfg&oe=64833EFC',
      name: 'Thuong',
      message: 'Hello, how are you ?',
      numberOfUnreadMessages: 3,
    },
    {
      url: 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/04/derick-mckinney-oARTWhz1ACc-unsplash.jpg',
      name: 'Thuan',
      message: 'Hello, how are you ?',
      numberOfUnreadMessages: 3,
    },
    {
      url: 'https://randomuser.me/api/portraits/men/70.jpg',
      name: 'Tuan',
      message: 'Hello, how are you ?',
      numberOfUnreadMessages: 3,
    },
    {
      url: 'https://siteimages.simplified.com/blog/DALL-E.png?auto=compress&fm=png',
      name: 'Tien',
      message: 'Hello, how are you ?',
      numberOfUnreadMessages: 3,
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const searchInbox = () =>
    users.filter(user =>
      user.name.toLowerCase().includes(searchText.toLowerCase()),
    );

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 10,
        }}>
        <TextInput
          autoCorrect={false}
          onChangeText={text => {
            setSearchText(text);
          }}
          placeholder="Search Inbox"
          placeholderTextColor={colors.placehoder}
          style={{
            flex: 1,
            paddingStart: 10,
            marginRight: 10,
            color: colors.black,
            backgroundColor: colors.inactive,
            height: 40,
            borderRadius: 10,
          }}
        />

        <TouchableOpacity>
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={icons.search}
          />
        </TouchableOpacity>
      </View>
      {searchInbox().length > 0 ? (
        <FlatList
          style={{}}
          data={searchInbox()}
          renderItem={({item}) => (
            <ChatItem
              onPress={() => {
                navigation.navigate(
                  'Messenger',
                  // , {user: item}
                );
              }}
              user={item}
              key={item.name}
            />
          )}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: fontSizes.h3,
            }}>
            No food found
          </Text>
        </View>
      )}
    </View>
  );
}
