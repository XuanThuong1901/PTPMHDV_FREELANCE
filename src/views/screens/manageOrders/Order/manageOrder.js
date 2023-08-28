import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {images, icons, fontSizes, colors} from '../../../constants';
import OrderItem from './orderItem';

export default function ManageOrder({cookie, navigation, orders}) {

  const [colorUnconfirmed, setColorUnconfirmed] = useState(colors.continues);
  const [colorUnfinished, setColorUnfinished] = useState(colors.placehoder);
  const [colorComleted, setColorComleted] = useState(colors.placehoder);

  function onPressColorUnconfirmed() {
    setColorComleted(colors.placehoder);
    setColorUnfinished(colors.placehoder);
    setColorUnconfirmed(colors.continues);
  }
  function onPressColorUnfinished() {
    setColorUnfinished(colors.continues);
    setColorComleted(colors.placehoder);
    setColorUnconfirmed(colors.placehoder);
  }
  function onPressColorComleted() {
    setColorUnconfirmed(colors.placehoder);
    setColorUnfinished(colors.placehoder);
    setColorComleted(colors.continues);
  }

  const image = [
    {image: require('../../../assets/a1.jpg')},
    {image: require('../../../assets/a2.jpg')},
    {image: require('../../../assets/a3.jpg')},
    {image: require('../../../assets/a4.jpg')},
    {image: require('../../../assets/a5.jpg')},
    {image: require('../../../assets/a6.jpg')},
    {image: require('../../../assets/a7.jpg')},
    {image: require('../../../assets/a8.jpg')},
    {image: require('../../../assets/a9.jpg')},
    {image: require('../../../assets/a10.jpg')},
    {image: require('../../../assets/a11.jpg')},
    {image: require('../../../assets/a12.jpg')},
    {image: require('../../../assets/a13.jpg')},
    {image: require('../../../assets/a14.jpg')},
    {image: require('../../../assets/a15.jpg')},
    {image: require('../../../assets/a16.jpg')},
  ];
  

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
        
          <View
            style={{
              height: 45,
              flexDirection: 'row',
              marginHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.33,
                borderBottomColor:
                  colorUnconfirmed === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorUnconfirmed}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorUnconfirmed,
                }}>
                Offer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.33,
                borderBottomColor:
                  colorUnfinished === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorUnfinished}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorUnfinished,
                }}>
                Inprogress
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.33,
                borderBottomColor:
                  colorComleted === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorComleted}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorComleted,
                }}>
                Completed
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: colors.inactive,
            }}
          />
          {colorUnconfirmed == colors.continues ? 
          <FlatList
          data={(orders.filter(order => order.status_order === "Offer"))}
          renderItem={({item}) => (
            <OrderItem
              onPress={() =>
               navigation.navigate('DetailOrder', {cookie:cookie, order:item})
              }
              order={item}
              image = {image[Math.floor(Math.random() * 15)].image}
              key={item.nameProject}
            />
          )}
        /> : (colorUnfinished == colors.continues ? <FlatList
          data={(orders.filter(order => (order.status_order === "Inprogress" || order.status_order === "Delivery" )))}
          renderItem={({item}) => (
            <OrderItem
              onPress={() =>
               navigation.navigate('DetailOrder',{cookie:cookie, order:item})
              }
              order={item}
              image = {image[Math.floor(Math.random() * 15)].image}
              key={item.nameProject}
            />
          )}
        /> : <FlatList
        data={(orders.filter(order => order.status_order === "Completed"))}
        renderItem={({item}) => (
          <OrderItem
            onPress={() =>
             navigation.navigate('DetailOrder', {cookie:cookie, order:item})
            }
            order={item}
            image = {image[Math.floor(Math.random() * 15)].image}
            key={item.nameProject}
          />
        )}
      />)
      }
          {/* <View
            style={{
              flex: 0.85,
              marginHorizontal: 10,
            }}>
            <FlatList
              data={orders}
              renderItem={({item}) => (
                <OrderItem
                  onPress={() =>
                   navigation.navigate('DetailOrder')
                  }
                  order={item}
                  key={item.nameProject}
                />
              )}
            />
          </View> */}
      <View style={{height: 1, backgroundColor: colors.inactive}} />
    </View>
  );
}
