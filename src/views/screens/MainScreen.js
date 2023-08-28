/**
 * @format
 */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {images, icons, fontSizes, colors} from '../constants';
import {UIButoon} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';

function Welcome() {
  // state => when a state is changed => UI í reloaded
  // like getter/setter
  const [accountTypes, setAccountTypes] = useState([
    {name: 'Influencer', isSelected: true},
    {name: 'Business', isSelected: false},
    {name: 'Individual', isSelected: false},
  ]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 100,
      }}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}>
        <View
          style={{
            flex: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={icons.icon_fire}
              style={{
                marginStart: 10,
                marginEnd: 5,
                width: 30,
                height: 30,
              }}
            />
            <Text style={{color: 'white'}}> YOUCOMPANY.CO </Text>
            <View style={{flex: 1}} />
            <Icon
              name={'question-circle'}
              style={{
                width: 20,
                height: 20,
                tintColor: 'white',
                marginEnd: 10,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{marginBottom: 7, color: 'white', fontSize: fontSizes.h6}}>
            Welcome
          </Text>
          <Text
            style={{marginBottom: 7, color: 'white', fontSize: fontSizes.h5}}>
            YOUCOMPANY.CO
          </Text>
          <Text
            style={{marginBottom: 7, color: 'white', fontSize: fontSizes.h6}}>
            Please select your account type
          </Text>
        </View>
        <View
          style={{
            flex: 45,
          }}>
          {' '}
          {accountTypes.map(accountType => (
            <UIButoon
              onPress={() => {
                setAccountTypes(
                  accountTypes.map(eachAccountType => {
                    return {
                      ...eachAccountType,
                      isSelected: eachAccountType.name == accountType.name,
                    };
                  }),
                );
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}{' '}
        </View>{' '}
        <View
          style={{
            flex: 20,
          }}>
          <UIButoon title={'login'.toUpperCase()} />{' '}
          <Text
            style={{
              marginBottom: 7,
              color: 'white',
              fontSize: fontSizes.h6,
              alignSelf: 'center',
            }}>
            Want to register new Account ?
          </Text>{' '}
          <TouchableOpacity
            onPress={() => {
              alert('press register');
            }}
            style={{
              padding: 5,
            }}>
            <Text
              style={{
                color: colors.primary,
                marginBottom: 7,
                fontSize: fontSizes.h6,
                alignSelf: 'center',
                textDecorationLine: 'underline',
              }}>
              Register{' '}
            </Text>{' '}
          </TouchableOpacity>{' '}
        </View>{' '}
      </ImageBackground>{' '}
    </View>
  );
}

export default Welcome;
