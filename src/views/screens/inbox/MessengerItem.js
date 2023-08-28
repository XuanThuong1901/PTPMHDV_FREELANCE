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
    Dimensions,
} from 'react-native'
import {images, colors, icons, fontSizes} from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { screenWidth } from '../../utilies/Device'; 

function MessengerItem(props) {
    const { onPress } = props
    const { url, isSender, messenger, timestamp, showUrl } = props.item
    return (isSender == false ? <TouchableOpacity
        onPress={onPress}
        style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
        {showUrl == true ? <Image
            style={{
                width: 35,
                height: 35,
                resizeMode: 'cover',
                borderRadius: 20,
                marginRight: 5,
                marginStart: 5,
            }}
            source={{
                uri: url
            }} /> : <View style={{
                width: 30,
                height: 30,
                marginRight: 5,
                marginStart: 10
                }}/>}
        <View style={{
            width: screenWidth  * 0.7,
            flexDirection: 'row',
        }}>
            <View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSizes.h6,
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                    backgroundColor: colors.messenger,
                    borderRadius: 10,
                }}>{messenger}</Text>
            </View>
            <View style={{ width: 20 }}></View>
        </View>
        {/* isSender = true */}
    </TouchableOpacity> :
        <TouchableOpacity
            onPress={onPress}
            style={{
                marginTop: 5,
                flexDirection: 'row',  
                justifyContent: 'flex-end',   
                alignItems: 'center',           
            }}>            
            <View style={{
                width: screenWidth * 0.7,
                flexDirection: 'row',
                justifyContent: 'flex-end',
            }}>
                
                <View>
                    <Text style={{
                        color: 'white',
                        fontSize: fontSizes.h6,
                        paddingVertical: 5,
                        paddingHorizontal: 7,
                        backgroundColor: colors.facebook,
                        borderRadius: 10,
                    }}>{messenger}</Text>
                </View>
                
            </View>
            {showUrl == true ? <Image
                style={{
                    width: 35,
                    height: 35,
                    resizeMode: 'cover',
                    borderRadius: 20,
                    marginRight: 5,
                    marginStart: 5,
                }}
                source={{
                    uri: url
                }} /> : <View style={{
                    width: 35,
                    height: 35,
                    marginRight: 5,
                    marginStart: 5
                    }}/>}
        </TouchableOpacity>)
}
export default MessengerItem