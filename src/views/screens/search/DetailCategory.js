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
import ReadMore from 'react-native-read-more-text';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import ItemDetailCategory from './ItemDetailCateory';
import axios from 'axios';
import { url } from '../../utilies/axios';
export default function DetailCategory(props) {
  const route = useRoute();
  // props
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;

  const {cateroryID, categoryName, description, urls, cookie} = route.params;
  console.log(cateroryID)
  // let categoryID = '1'
  // let categoryName = '1'
  // let description = '1'
  // let urls = ''
  let detailCategory = [];
  const selectCategoryDetail = async () => {
    try {
      let response = await axios.get(
        `${url}/post/category-detail-list/${cateroryID}`,
      );
      console.log(response);
      if (response == null) {
        return;
      }
      response.data.forEach(function (item) {
        let categoryTemp = {};
        categoryTemp.categoryDetailID = item['category_detail_id'];
        categoryTemp.categoryDetailName = item['category_detail_name'];
        detailCategory.push(categoryTemp);
      });
    } catch (error) {}
  };

  useEffect(()=>{
    selectCategoryDetail()
  })

  const [categoryDetail, setCategoryDetail] = useState([
    {
      categoryID: 1,
      categoryDetailID: 1,
      categoryDetailName: 'Logo Design',
    },
    {
      categoryID: 1,
      categoryDetailID: 2,
      categoryDetailName: 'Brand Style Guides',
    },
    {
      categoryID: 1,
      categoryDetailID: 3,
      categoryDetailName: 'Business Cards & Stationery',
    },
    {
      categoryID: 1,
      categoryDetailID: 4,
      categoryDetailName: 'Game Art',
    },
    {
      categoryID: 1,
      categoryDetailID: 5,
      categoryDetailName: 'Graphics for Streamers',
    },
    {
      categoryID: 1,
      categoryDetailID: 6,
      categoryDetailName: 'Twitch Store',
    },
    {
      categoryID: 1,
      categoryDetailID: 7,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 2,
      categoryDetailID: 8,
      categoryDetailName: 'Logo Design',
    },
    {
      categoryID: 2,
      categoryDetailID: 9,
      categoryDetailName: 'Brand Style Guides',
    },
    {
      categoryID: 2,
      categoryDetailID: 10,
      categoryDetailName: 'Business Cards & Stationery',
    },
    {
      categoryID: 2,
      categoryDetailID: 11,
      categoryDetailName: 'Game Art',
    },
    {
      categoryID: 2,
      categoryDetailID: 12,
      categoryDetailName: 'Graphics for Streamers',
    },
    {
      categoryID: 2,
      categoryDetailID: 13,
      categoryDetailName: 'Twitch Store',
    },
    {
      categoryID: 2,
      categoryDetailID: 14,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 3,
      categoryDetailID: 15,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 4,
      categoryDetailID: 16,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 5,
      categoryDetailID: 17,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 6,
      categoryDetailID: 18,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 7,
      categoryDetailID: 19,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 8,
      categoryDetailID: 20,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 9,
      categoryDetailID: 21,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 10,
      categoryDetailID: 22,
      categoryDetailName: 'Illustration',
    },
    {
      categoryID: 11,
      categoryDetailID: 23,
      categoryDetailName: 'Illustration',
    },
  ]);


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.ghostWhite,
      }}>
      <View
        style={{
          flex: 0.08,
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomWidth: 2,
          borderBottomColor: colors.inactive,
        }}>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignItems: 'flex-start',
          }}
          onPress={() => {
            goBack();
          }}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={icons.back}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 0.9,
            marginLeft: -25,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontSizes.h4,
              fontWeight: 'bold',
              color: colors.black,
            }}>
            {categoryName}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: colors.inactive,
        }}
      />
      <View
        style={{
          flex: 0.9,
        }}>
        <ScrollView>
          <View
            style={{
              marginVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                marginBottom: 5,
                height: 50,
                width: 50,
              }}
              source={urls}
            />
            <Text
              style={{
                marginVertical: 5,
                fontSize: fontSizes.h3,
                fontWeight: 'bold',
                color: colors.black,
              }}>
              {categoryName}
            </Text>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.black,
              }}>
              {description}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 15,
            }}>
            <FlatList
              data={detailCategory}
              renderItem={({item}) => (
                <ItemDetailCategory
                  onPress={() => {
                    navigate('ListItem', {
                      categoryDetailID: item.categoryDetailID,
                      categoryDetailName: item.categoryDetailName,
                      cookie: cookie,
                    });
                  }}
                  categoryDetail={item}
                  key={item.categoryDetailID}
                />
              )}
              style={{flex: 1}}></FlatList>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
