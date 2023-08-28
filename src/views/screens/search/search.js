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
import ItemSearch from './ItemCategories';
import {url} from '../../utilies/axios';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
export default function Search(props) {
  const {onPress, navigation} = props
  //    // funciton of navigate to/back
    const {navigate, goBack} = navigation;
  const route = useRoute();
  const{cookie} = route.params;

  const urls = [{url : require('../../assets/graphic.png')},
{url : require('../../assets/marketing.png')},
  {url : require('../../assets/writing.png')},
  {url : require('../../assets/video.png')},
  {url : require('../../assets/music.png')},
  {url : require('../../assets/programming.png')},
  {url : require('../../assets/data.png')},
  {url : require('../../assets/business.png')},
  {url : require('../../assets/lifestyle.png')},
  {url : require('../../assets/photography.png')},
  {url : require('../../assets/AI.png')},
  {url : require('../../assets/angle-right.png')},
  {url : require('../../assets/credit-card.png')},
  {url : require('../../assets/business.png')},
  {url : require('../../assets/lifestyle.png')},
  {url : require('../../assets/video.png')},
  {url : require('../../assets/music.png')},
  {url : require('../../assets/programming.png')},
  {url : require('../../assets/data.png')},
  {url : require('../../assets/business.png')},]

  let category = [];
  const selectCategory = async () => {
    try {
      let response = await axios.get(`${url}/post/get-categories`);
      console.log(response);
      if (response == null) {
        return;
      }
      let i = 0;
      response.data.forEach(function (item) {
        let categoryTemp = {};
        categoryTemp.cateroryID = item['category_id'];
        categoryTemp.categoryName = item['category_name'];
        categoryTemp.description = item['description'];
        categoryTemp.url = urls[i].url;
        i+=1
        category.push(categoryTemp);
      });
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    selectCategory()
  })

  const [colorCategory, setColorCategory] = useState(colors.continues);
  const [colorInterest, setColorInterest] = useState(colors.placehoder);

  function onPressColorCategory() {
    setColorInterest(colors.placehoder);
    setColorCategory(colors.continues);
  }
  function onPressColorInterest() {
    setColorInterest(colors.continues);
    setColorCategory(colors.placehoder);
  }

  const [searchText, setSearchText] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 0.2,
        }}>
        <View
          style={{
            height: 40,
            margin: 20,
            borderRadius: 10,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.inactive,
          }}>
          <TextInput
            style={{
              color: colors.black,
              fontWeight: 'bold',
            }}
            placeholder="Search services"
            placeholderTextColor={colors.placehoder}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.5,
              borderBottomColor:
                colorCategory === colors.continues
                  ? colors.continues
                  : colors.inactive,
              borderBottomWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onPressColorCategory}>
            <Text
              style={{
                marginBottom: 5,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: fontSizes.h5,
                fontWeight: 'bold',
                color: colorCategory,
              }}>
              Categories
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 0.5,
              borderBottomColor:
                colorInterest === colors.continues
                  ? colors.continues
                  : colors.inactive,
              borderBottomWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onPressColorInterest}>
            <Text
              style={{
                marginBottom: 5,
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: fontSizes.h5,
                fontWeight: 'bold',
                color: colorInterest,
              }}>
              Interests
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 0.8,
        }}>
        <FlatList
          data={category}
          renderItem={({item}) => (
            <ItemSearch
              onPress={() => {
                navigate('DetailCategory', {
                  cateroryID: item.cateroryID,
                  categoryName: item.categoryName,
                  description: item.description,
                  urls: item.url,
                  cookie: cookie,
                });
              }}
              category={item}
              key={item.cateroryID}
            />
          )}
          style={{flex: 1}}></FlatList>
      </View>
    </View>
  );
}
