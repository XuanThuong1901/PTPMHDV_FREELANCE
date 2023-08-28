import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {images, icons, fontSizes, colors} from '../../constants';

import ManageOrder from './Order/manageOrder';
import ManageOffer from './Offer/ManageOffer';
import axios from 'axios';
import { url } from '../../utilies/axios';
import { useRoute } from '@react-navigation/native';
// import { cookies } from '../../navigation/UITab';
export default function MainManage(props) {
  // props
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;
  const route = useRoute()
  const {cookie} = route.params;

  const [orders, setOrders] = useState([]);
  const [offers, setOffers] = useState([]);

  const selectOrders = async () => {
    try {
      let response = await axios.get(`${url}/order/find-order-detail-list-customer`, {
        headers: {
          'Authorization': `Bearer ${cookie}`,
        },
      });
      console.log(cookie)
      console.log(response);

      let order = response.data;

      setOrders(order);
      console.log('order')
      console.log(order)
      // response.data.forEach(item => {
      //   let order = {}
      //   // order.orderID = item.order_id;
      //   // order.status = item.status;
      //   // order.post.postID = item.post.post_id;
      //   // order.post.postName = item.post.post_name;
      //   // order.post.description = item.post.description;
      //   // order.inforFreelance.freelanceID = item.inforFreelance.freelance_id;
      //   // order.inforFreelance.email = item.inforFreelance.email;
      //   // order.inforFreelance.freelance = item.inforFreelance.email;
      //   // order.inforFreelance.email = item.inforFreelance.email;
      //   // order.inforFreelance.email = item.inforFreelance.email;
      //   // order.inforFreelance.email = item.inforFreelance.email;
      // });
    } catch (error) {
      console.log(error);
    }
  };

  // selectOrders();

  const selectOffers = async () => {
    try {
      let response = await axios.get(`${url}/order/find-order-detail-list-freelancer`, {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      });
      console.log(response.data)
      let offer = response.data;
      setOffers(offer);
      console.log('offer',offer)
      // response.data.forEach(item => {
      //   let order = {}
      //   // order.orderID = item.order_id;
      //   // order.status = item.status;
      //   // order.post.postID = item.post.post_id;
      //   // order.post.postName = item.post.post_name;
      //   // order.post.description = item.post.description;
      //   // order.inforFreelance.freelanceID = item.inforFreelance.freelance_id;
      //   // order.inforFreelance.email = item.inforFreelance.email;
      //   // order.inforFreelance.freelance = item.inforFreelance.email;
      //   // order.inforFreelance.email = item.inforFreelance.email;
      //   // order.inforFreelance.email = item.inforFreelance.email;
      //   // order.inforFreelance.email = item.inforFreelance.email;
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const [colorOrder, setColorOrder] = useState(colors.continues);
  const [colorOffer, setColorOffer] = useState(colors.black);

  function onPressColorOrder() {
    setColorOffer(colors.black);
    setColorOrder(colors.continues);
  }
  function onPressColorOffer() {
    setColorOffer(colors.continues);
    setColorOrder(colors.black);
  }


  useFocusEffect(React.useCallback(()=>{
      selectOrders();
      selectOffers();
  }, [])
  )

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 0.08,
        }}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.9,
              marginLeft: 20,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: fontSizes.h3,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Manage
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignItems: 'flex-end',
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
              }}
              source={icons.menu}
            />
          </TouchableOpacity>
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
          flex: 0.92,
        }}>
        <ScrollView>
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
                  colorOrder === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorOrder}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorOrder,
                }}>
                Order
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.5,
                borderBottomColor:
                  colorOffer === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorOffer}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorOffer,
                }}>
                Offer
              </Text>
            </TouchableOpacity>
          </View>
          {colorOrder === colors.continues ? (
            <ManageOrder
             navigation={navigation}
             cookie={cookie}
              orders={orders}
             
            />
          ) : (
            <ManageOffer
            navigation={navigation}
            cookie={cookie}
            offers = {offers}
            />
          )}
        </ScrollView>
      </View>
      <View style={{height: 1, backgroundColor: colors.inactive}} />
    </View>
  );
}
