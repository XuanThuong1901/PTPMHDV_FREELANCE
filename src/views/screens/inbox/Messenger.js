import React, {useState, useEffect, useRef} from 'react';
import {
    Text, 
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Keyboard,
    TextInput
} from 'react-native'
import {images, colors, icons, fontSizes} from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import MessengerItem from './MessengerItem'
// import { TextInput } from 'react-native-gesture-handler';

function Messenger(props) {

       // props
       const {onPress, navigation} = props;
       // funciton of navigate to/back
       const {navigate, goBack} = navigation;
       
    const [typedText, setTypedText] = useState('')
    const [chatHistory, setChatHistory] = useState([
        {
           url: 'https://randomuser.me/api/portraits/men/70.jpg',
           showUrl: true,
           isSender: true,           
           messenger: "Hello",
           timestamp: 1641654238000,
        },
        {
            url: 'https://randomuser.me/api/portraits/men/70.jpg',
            showUrl: false,
            isSender: true,
            messenger: "How are you ?",
            timestamp: 1641654298000,
         },
         {             
            url: 'https://randomuser.me/api/portraits/men/70.jpg',
            showUrl: false,
            isSender: true,
            messenger: "How about your work ?. nujdhsfuhduf dhuhu uhuh uhfudhufduhu hufhfd",
            timestamp: 1641654538000,
         },
         {
            url: 'https://randomuser.me/api/portraits/men/50.jpg',
            showUrl: true,
            isSender: false,
            messenger: "Yes",
            timestamp: 1641654598000,
         },
         {
            url: 'https://randomuser.me/api/portraits/men/50.jpg',
            showUrl: false,
            isSender: false,
            messenger: "I am fine",
            timestamp: 1641654598000,
         },
         {
            url: 'https://randomuser.me/api/portraits/men/70.jpg',
            showUrl: true,
            isSender: true,
            messenger: "Let's go out",
            timestamp: 1641654778000,
         },
    ])

    const flatListRef = useRef(null);
  useEffect(() => {
    // Cuộn đến vị trí cuối cùng khi thêm mới phần tử vào mảng
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd();
    }
  }, [chatHistory]);
    // const {url, name, userId} = props.route.params.user
 
    return <View style={{
       flex: 1,
    }}>        
        
        <View
        style={{
          flex: 0.08,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderColor: colors.placehoder,
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignItems: 'flex-start',
          }}
          onPress={() => {
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
          }}>
          <Text
            style={{
              fontSize: fontSizes.h3,
              color: colors.black,
              fontWeight: 'bold',
            }}>
            Thuong
          </Text>
        </View>
      </View>
        <FlatList style={{    
            flex: 0.83,
        }} 
        ref={flatListRef}
        data={chatHistory}
        renderItem={({item}) => <MessengerItem             
            onPress={()=> {                        
                alert(`You press item's name: ${item.timestamp}`)
            }}
            item = {item} key={`${item.timestamp}`}/>}            
        />
        <View style={{
          flex: 0.1,           
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopColor: colors.inactive,
            borderTopWidth: 2,
        }}>
            <TextInput
                onChangeText={(typedText) => {
                    setTypedText(typedText)
                }}
                style={{
                    flex: 1,
                    height: 45,
                    color: 'black',
                    paddingStart: 20,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: colors.inactive,
                }}
                placeholder='Enter your message here'
                value={typedText}
                placeholderTextColor={colors.placeholder}
            />
            <TouchableOpacity onPress={async ()=>{
                if(typedText.trim().length == 0) {
                    return
                }                
                 
                //  let stringUser = await AsyncStorage.getItem("user")
                //  let myUserId = JSON.parse(stringUser).userId
                //  let myFriendUserId = props.route.params.user.userId
                 //save to Firebase DB
                 let newMessengerObject = {
                    //fake
                    url: 'https://randomuser.me/api/portraits/men/70.jpg',
                    showUrl: false,
                    isSender: true,                    
                    messenger: typedText,
                    timestamp: (new Date()).getTime(),
                 } 

                 setChatHistory(prevState => prevState.concat(newMessengerObject));
                //  Keyboard.dismiss()                
                //  firebaseSet(firebaseDatabaseRef(
                //     firebaseDatabase,
                //     `chats/${myUserId}-${myFriendUserId}`
                // ), newMessengerObject).then(()=>{
                //     setTypedText('')
                // })
                
                 //"id1-id2": {messenger object}
            }}>
                <Image style={{
                    marginHorizontal: 5,
                    width: 20,
                    height: 20,
                }} source={icons.send_message}/>
            </TouchableOpacity>
        </View>
    </View>
}
export default Messenger