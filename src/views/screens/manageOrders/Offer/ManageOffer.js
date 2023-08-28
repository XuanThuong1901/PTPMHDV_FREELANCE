import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  FlatList,
} from 'react-native';
import {images, icons, fontSizes, colors} from '../../../constants';
import OfferItem from './OfferItem';

export default function ManageOffer({navigation, cookie, offers}) {

    const {navigate} = navigation;
    
  // props
  // const {navigate, goBack} = props;ss
  //  funciton of navigate to/back
  // const {navigate, goBack} = navigation;

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
  
 console.log(cookie)
  const [colorAssignment, setColorAssignment] = useState(colors.placehoder);
  const [colorConfirmation, setColorConfirmation] = useState(colors.continues);
  const [colorComleted, setColorComleted] = useState(colors.placehoder);
  function onPressColorConfirmation() {
    setColorAssignment(colors.placehoder);
    setColorConfirmation(colors.continues);
    setColorComleted(colors.placehoder);
  }
  function onPressColorAssignment() {
    setColorAssignment(colors.continues);
    setColorConfirmation(colors.placehoder);
    setColorComleted(colors.placehoder);
  }
  function onPressColorComleted() {
    setColorAssignment(colors.placehoder);
    setColorConfirmation(colors.placehoder);
    setColorComleted(colors.continues);
  }

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
                colorConfirmation === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorConfirmation}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorConfirmation,
                }}>
                Offer
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.33,
                borderBottomColor:
                  colorAssignment === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorAssignment}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorAssignment,
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
          {colorConfirmation == colors.continues ? 
          <FlatList
          data={(offers.filter(offer => offer.status_order === "Offer"))}
          renderItem={({item}) => (
            <OfferItem
              onPress={() =>
               navigate('DetailOffer',  {cookie: cookie, offer:item})
              }
              offer={item}
              image = {image[Math.floor(Math.random() * 15)].image}
              key={item.nameProject}
            />
          )}
        /> : (colorAssignment == colors.continues ? <FlatList
          data={(offers.filter(offer => (offer.status_order === "Inprogress" || offer.status_order === "Delivery" )))}
          renderItem={({item}) => (
            <OfferItem
              onPress={() =>
               navigate('DetailOffer',  {cookie: cookie, offer:item})
              }
              offer={item}
              image = {image[Math.floor(Math.random() * 15)].image}
              key={item.nameProject}
            />
          )}
        /> : <FlatList
        data={(offers.filter(offer => offer.status_order === "Completed"))}
        renderItem={({item}) => (
          <OfferItem
            onPress={() =>
             navigate('DetailOffer', {cookie: cookie, offer:item})
            }
            offer={item}
            image = {image[Math.floor(Math.random() * 15)].image}
            key={item.nameProject}
          />
        )}
      />)
      }
      <View style={{height: 1, backgroundColor: colors.inactive}} />
    </View>
  );
}
