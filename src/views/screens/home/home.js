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
import Categories from './Categories';
import ItemHome from './ItemHome';
import axios from 'axios';
import {url} from '../../utilies/axios';
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

import {useRoute, useFocusEffect} from '@react-navigation/native';
export default function Home(props) {
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;
  const route = useRoute();
  // const {cookie} = route.params;

  const [categories1, setCategories1] = useState([]);

  const [categories2, setCategories2] = useState([]);

  const [categories3, setCategories3] = useState([]);

  const [categories4, setCategories4] = useState([]);

  const [categories5, setCategories5] = useState([]);
  const [gits, setGits] = useState([]);

  const image = [
    {image: require('../../assets/a1.jpg')},
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
    {image: require('../../assets/a16.jpg')},
  ];
  const imageCategory = [
    {
      image:
        'https://static.wixstatic.com/media/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png',
    },
    {
      image:
        'https://static.wixstatic.com/media/84b06e_0570f131bb82434e8307ecd5bb177811~mv2.jpg/v1/fill/w_723,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84b06e_0570f131bb82434e8307ecd5bb177811~mv2.jpg',
    },
    {
      image:
        'https://vowels.co.in/blog/wp-content/uploads/2021/11/how-to-create-brand-indentity.jpg',
    },
    {
      image:
        'https://static.wixstatic.com/media/84b06e_967d0fa3ef1e498d83f9a916e765839c~mv2.jpg/v1/fill/w_723,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_967d0fa3ef1e498d83f9a916e765839c~mv2.jpg',
    },
    {
      image:
        'https://static.semrush.com/blog/uploads/media/3b/88/3b888b0cae0da0e612682a2a3181d9b9/image11.webp',
    },
    {
      image:
        'https://static.semrush.com/blog/uploads/media/dc/a4/dca4a96151aa5fc3cf8858699eb8520a/image8.webp',
    },
    {
      image:
        'https://www.mentionlytics.com/wp-content/uploads/2016/09/20160101-wo12e.jpg',
    },
  ];

  let posts = [];
  const selectPost = async () => {
    try {
      let response = await axios.get(`${url}/post/get-posts`);
      console.log(response);
      if (response == null) {
        return;
      }
      response.data.forEach(function (item) {
        let postTemp = {};
        postTemp.jobID = item['post_id'];
        postTemp.jobName = item['post_name'];
        postTemp.userName = item.post_detail.profile_user;
        postTemp.description = item['description'];
        postTemp.price = item.post_detail.packages[0].package_detail.unit_price;
        const randomNumber = Math.floor(Math.random() * 15);
        postTemp.image = image[randomNumber].image;

        posts.push(postTemp);
      });
      setGits(posts);
    } catch (error) {}
  };

  let detailCategory1 = [];
  const selectCategoryDetail1 = async () => {
    try {
      let response = await axios.get(`${url}/post/category-detail-list/3`);
      console.log(response);
      if (response == null) {
        return;
      }
      response.data.forEach(function (item) {
        let categoryTemp = {};
        categoryTemp.categoryDetailID = item['category_detail_id'];
        categoryTemp.categoryDetailName = item['category_detail_name'];
        const randomNumber = Math.floor(Math.random() * 6);
        categoryTemp.image = imageCategory[randomNumber].image;
        detailCategory1.push(categoryTemp);
      });
      setCategories1(detailCategory1);
    } catch (error) {}
  };

  let detailCategory2 = [];
  const selectCategoryDetail2 = async () => {
    try {
      let response = await axios.get(`${url}/post/category-detail-list/3`);
      console.log(response);
      if (response == null) {
        return;
      }
      response.data.forEach(function (item) {
        let categoryTemp = {};
        categoryTemp.categoryDetailID = item['category_detail_id'];
        categoryTemp.categoryDetailName = item['category_detail_name'];
        const randomNumber = Math.floor(Math.random() * 6);
        categoryTemp.image = imageCategory[randomNumber].image;
        detailCategory2.push(categoryTemp);
      });
      setCategories2(detailCategory2);
    } catch (error) {}
  };

  useFocusEffect(
    React.useCallback(() => {
      selectPost();
      selectCategoryDetail1();
    }, []),
  );

  // useEffect(() => {
  //   selectPost();
  //   selectCategoryDetail1();
  //   // selectCategoryDetail2();
  //   // console.log('2',detailCategory2);

  // }, []);

  const [searchText, setSearchText] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: colors.inactive}}>
      <ScrollView>
        <View
          style={{
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontSizes.h1,
              fontWeight: 'bold',
              color: colors.continues,
            }}>
            FREELANCE
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: 'row',
          }}>
          <TextInput
            autoCorrect={false}
            onChangeText={text => {
              setSearchText(text);
            }}
            placeholder="Search services"
            placeholderTextColor={colors.placehoder}
            style={{
              backgroundColor: 'white',
              height: 40,
              flex: 1,
              borderRadius: 5,
              opacity: 0.8,
              paddingStart: 30,
            }}
          />
          <View
            style={{
              justifyContent: 'flex-end',
            }}>
            <Icon
              name="search"
              size={25}
              color={colors.placehoder}
              style={{
                position: 'absolute',
                left: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginLeft: 10,
            marginTop: 5,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h3,
              color: colors.black,
              marginBottom: 5,
            }}>
            Griphics & Design
          </Text>
          <FlatList
            horizontal
            data={categories1}
            renderItem={({item}) => (
              <Categories
                onPress={() => {
                  navigate('ListItem', {
                    categoryDetailID: item.categoryDetailID,
                    categoryDetailName: item.categoryDetailName,
                  });
                }}
                categories={item}
                key={item.categoryDetailID}
              />
            )}
            style={{flex: 1}}></FlatList>
        </View>
        <View style={{height: 1, backgroundColor: colors.inactive}} />
        <View
          style={{
            margin: 10,
            marginTop: 20,
            justifyContent: 'center',
            borderRadius: 15,
          }}>
          <Image
            source={images.explore}
            style={{
              height: 250,
              width: 340,
              borderRadius: 15,
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h3,
              color: colors.black,
              marginBottom: 5,
            }}>
            Writing & Traslation
          </Text>
          <FlatList
            horizontal
            data={categories1}
            renderItem={({item}) => (
              <Categories
                onPress={() => {
                  navigate('ListItem', {
                    categoryDetailID: item.categoryDetailID,
                    categoryDetailName: item.categoryDetailName,
                  });
                }}
                categories={item}
                key={item.categoryDetailID}
              />
            )}
            style={{flex: 1}}></FlatList>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              flex: 0.85,
              fontSize: fontSizes.h3,
              color: colors.black,
            }}>
            Recently viewed & more
          </Text>
          <TouchableOpacity
            style={{
              flex: 0.15,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.continues,
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 230,
            marginLeft: 10,
            marginTop: 15,
            marginBottom: 10,
          }}>
          <FlatList
            horizontal
            data={gits}
            renderItem={({item}) => (
              <ItemHome
                onPress={() => {
                  navigate('DetailItem', {
                    jobPostID: item.jobID,
                    image: item.image,
                    description: item.description,
                    level: '',
                  });
                }}
                git={item}
                key={item.jobID}
              />
            )}
            style={{flex: 1}}></FlatList>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h3,
              color: colors.black,
              marginBottom: 5,
            }}>
            Video & Animation
          </Text>
          <FlatList
            horizontal
            data={categories1}
            renderItem={({item}) => (
              <Categories
                onPress={() => {
                  navigate('ListItem', {
                    categoryDetailID: item.categoryDetailID,
                    categoryDetailName: item.categoryDetailName,
                  });
                }}
                categories={item}
                key={item.categoryDetailID}
              />
            )}
            style={{flex: 1}}></FlatList>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
        </View>
        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              flex: 0.85,
              fontSize: fontSizes.h3,
              color: colors.black,
            }}>
            Inspired by your browsing history
          </Text>
        </View>
        <View
          style={{
            height: 230,
            marginLeft: 10,
            marginTop: 15,
            marginBottom: 10,
          }}>
          <FlatList
            horizontal
            data={gits}
            renderItem={({item}) => (
              <ItemHome
                onPress={() => {
                  navigate('DetailItem', {
                    jobPostID: item.jobID,
                    image: item.image,
                    description: item.description,
                    level: '',
                  });
                }}
                git={item}
                key={item.jobID}
              />
            )}
            style={{flex: 1}}></FlatList>
        </View>
      </ScrollView>
      {/* <FlatList
            horizontal
            data={recently}
            renderItem={({item}) => (
              <Item
                onPress={() => {
                  alert(`You press item's name: ${item.name}`);
                }}
                recently={item}
                key={item.name}
              />
            )}
            keyExtractor={item => item.name}></FlatList> */}
    </View>
  );
}
