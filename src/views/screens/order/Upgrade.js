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
import ReadMore from 'react-native-read-more-text';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderDetail from './OrderDetail';
import OrderSummary from './OrderSummary';

export default function Upgrade(props) {
  // props
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;

  const [extras, setExtras] = useState([
    {
      extra: 'Extra Fast: 2 days Delivery',
      check: false,
      price: 15,
    },
    {
      extra: 'Additional revision',
      check: false,
      price: 2,
    },
    {
      extra: 'Additional logo',
      check: false,
      price: 2,
    },
    {
      extra: 'printable file',
      check: false,
      price: 10,
    },
    {
      extra: '3D mockup',
      check: false,
      price: 20,
    },
    {
      extra: 'Source file',
      check: false,
      price: 1,
    },
    {
      extra: 'Stationery designs',
      check: false,
      price: 3,
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
  function onPressTotal(check, price) {
    if (check) {
      setTotalPrice(totalPrice + price);
    } else {
      if (totalPrice <= 0) setTotalPrice(totalPrice - price);
    }
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.ghostWhite,
      }}>
      <View
        style={{
          flex: 0.08,
          marginHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignItems: 'flex-start',
          }}
          onPress={()=>{
            goBack()
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
            alignItems: 'center',
            marginLeft: -20,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: colors.black,
              fontWeight: 'bold',
            }}>
            Upgrade
          </Text>
        </View>
      </View>
      <View style={{height: 1, backgroundColor: colors.inactive}} />
      <View
        style={{
          flex: 0.93,
        }}>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              backgroundColor: colors.WhiteSmoke,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontWeight: 'bold',
                fontSize: fontSizes.h4,
                color: colors.black,
              }}>
              Check out my Gigs extras
            </Text>
          </View>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
          <FlatList
            data={extras}
            keyExtractor={item => item.extra}
            renderItem={({item}) => {
              return (
                <View>
                  <View
                    style={{
                      flex: 1,
                      marginLeft: 10,
                      marginVertical: 15,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 20,
                        borderWidth: 1,
                        backgroundColor:
                          item.check === true ? colors.continues : 'white',
                        borderColor: colors.placehoder,
                      }}
                      onPress={() => {
                        setExtras(extras =>
                          extras.map(prevItem => {
                            if (prevItem.extra === item.extra) {
                              return {
                                ...prevItem,
                                check: !prevItem.check,
                              };
                            }

                            return prevItem;
                          }),
                        );
                        onPressTotal(item.check, item.price);
                      }}></TouchableOpacity>
                    <View
                      style={{
                        flex: 0.7,
                        marginLeft: 10,
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: fontSizes.h6,
                        }}>
                        {item.extra}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 0.25,
                        alignItems: 'flex-end',
                      }}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: fontSizes.h6,
                          fontWeight: 'bold',
                        }}>
                        US${item.price}
                      </Text>
                    </View>
                  </View>
                  <View style={{height: 1, backgroundColor: colors.inactive}} />
                </View>
              );
            }}
            style={{flex: 1}}></FlatList>
        </ScrollView>
        <TouchableOpacity
          style={{
            height: 35,
            marginVertical: 20,
            marginHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.continues,
            borderRadius: 5,
          }}
          onPress={() => {
            navigate('OrderReview')
          }}>
          <Text
            style={{
              fontSize: fontSizes.h5,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Continue(US${Math.abs(totalPrice)})
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
