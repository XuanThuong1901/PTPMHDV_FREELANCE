import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions
} from 'react-native';
import { colors, fontSizes } from '../../constants';

export default function Payment(props) {
    const HEIGHT_MODAL = 200;
    const WIDTH = Dimensions.get('window').width;
  
    const closeModal = (bool, data) => {
        props.changeModalVisible(bool);
        props.setData(data);
    }
    return (
    <TouchableOpacity
      style={{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
      }}>
        <View style={{
            height: HEIGHT_MODAL,
            width: WIDTH - 80,
            paddingTop: 10,
            paddingLeft: 10,
            backgroundColor:'white',
            borderRadius: 10,
            borderColor: colors.inactive,
            borderWidth: 2,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text style={{
                color: colors.black,
                fontSize: fontSizes.h2,
                fontWeight: 'bold'
            }}>
                Pay 
            </Text>
            </View>
            <View style={{

            }}>
            <Text style={{
                color: colors.black,
                fontSize: fontSizes.h5,
                fontWeight: 'bold'
            }}>
                enter card code
            </Text>
            </View>
            
            <TextInput
            style={{
                height: 40,
              backgroundColor: colors.inactive,
              borderRadius: 10,
              color: colors.black,
              marginTop: 15,
              marginEnd: 10,
            }}
            placeholder="card code"
            placeholderTextColor={colors.placehoder}
          />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 25,
            }}>
                <TouchableOpacity style={{
                    width: 100,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.continues,
                    borderRadius: 10,
                }}
                    onPress={()=> { closeModal(false, 'pay')}}
                >
                    <Text style={{
                color: colors.black,
                fontSize: fontSizes.h4,
                fontWeight: 'bold'
            }}>
                        Pay
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{
                    width: 100,
                    height: 40,
                    marginEnd: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.continues,
                    borderRadius: 10,
                }}
                onPress={()=> { closeModal(false, 'cancel')}}
                >
                    <Text style={{
                color: colors.black,
                fontSize: fontSizes.h5,
                fontWeight: 'bold'
            }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>

            

        </View>
      
    </TouchableOpacity>
  );
}
