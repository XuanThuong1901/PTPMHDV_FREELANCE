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
import {useRoute} from '@react-navigation/native';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Target from './target';
import Item from './Item';
import { url } from '../../utilies/axios';
import axios from 'axios';

import {
  users,
  profileUsers,
  levels,
  categorys,
  categoryDetails,
  jobPosts,
  jobPostDetails,
  packageDetails,
} from '../DataTest';

export default function ListItem(props) {
  const route = useRoute();

  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;

  const {categoryDetailID, categoryDetailName, cookie} = route.params;
  // const categoryDetailID = '1'
  // const categoryDetailName = '1'

  const image = [{image: require('../../assets/a1.jpg')},
  {image: require('../../assets/a2.jpg')},
  {image: require('../../assets/a3.jpg')},
  {image: require('../../assets/a4.jpg')},
  {image: require('../../assets/a5.jpg')},
  {image: require('../../assets/a6.jpg')},
  {image: require('../../assets/a7.jpg')},
  {image: require('../../assets/a8.jpg')},
  {image: require('../../assets/a9.jpg')},
  {image: require('../../assets/a10.jpg')},
  {image: require('../../assets/a11.jpg')},
  {image: require('../../assets/a12.jpg')},
  {image: require('../../assets/a13.jpg')},
  {image: require('../../assets/a14.jpg')},
  {image: require('../../assets/a15.jpg')},
  {image: require('../../assets/a16.jpg')}]

  let posts = [];
  const selectPost = async () => {
    try {
      let response = await axios.get(
        `${url}/post/get-posts/${categoryDetailID}`,
      );
      console.log(response);
      if (response == null) {
        return;
      }
      response.data.forEach(function (item) {
        let postTemp = {};
        postTemp.jobID = item['post_id']
        postTemp.jobName = item['post_name']
        postTemp.userName = item['profile_user']
        postTemp.description = item['description']
        postTemp.price = item['price']
        postTemp.level = item['level']
        const randomNumber = Math.floor(Math.random() * 15);
        postTemp.image = image[randomNumber].image
        
        posts.push(postTemp);
      });
    } catch (error) {}
  };

  useEffect(()=>{
    selectPost()
    // addGit();
  }, [])

  // useEffect(() => {
  //   addGit();
  // }, []);

  const [buttonHeart, setButtonHeart] = useState(icons.heart);
  const onPressButtonHeart = item => {
    if (buttonHeart === icons.heart) {
      setButtonHeart(icons.heart1);
    } else {
      setButtonHeart(icons.heart);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.inactive}}>
      <View
        style={{
          flex: 0.1,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            
          <TouchableOpacity
            style={{
              flex: 0.1,
              marginLeft: 10,
              alignItems: 'center',
            }}
            onPress={() => {
              goBack();
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={icons.back}
            />
          </TouchableOpacity>

          <View
            style={{
              flex: 0.8,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: fontSizes.h3,
                fontWeight: 'bold',
                color: colors.continues,
              }}>
              {categoryDetailName}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 0.1,
              marginRight: 10,
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={icons.search}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 0.85,
        }}>
        <ScrollView>
          <View
            style={{
              marginHorizontal: 10,
              marginBottom: 10,
            }}>
            <FlatList
              data={posts}
              renderItem={({item}) => (
                <Item
                  onPress={() => {
                    navigate('DetailItem', {cookie:cookie, jobPostID: item.jobID, image: item.image, description: item.description, level:item.level});
                  }}
                  git={item}
                  key={item.jobID}
                />
              )}
              style={{flex: 1}}></FlatList>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
