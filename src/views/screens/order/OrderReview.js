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
  Modal,
  Alert,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import {useRoute} from '@react-navigation/native';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderDetail from './OrderDetail';
import OrderSummary from './OrderSummary';
import {url} from '../../utilies/axios';
import axios from 'axios';
import {payments} from '../DataTest';
import Payment from './payment';
import {cookies} from '../../navigation/UITab';

export default function Order(props) {
  // props
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;
  const route = useRoute();
  const {cookie, request, git, packageSelect} = route.params;
  console.log(request, git, packageSelect);
  let post_id = git.postID;
  let package_id = packageSelect.packageId;

  const continues = async () => {
    try {
      let response = await axios.post(`${url}/user/infor-user`, {
        custormerID,
        jobPostID,
        freelancerID,
        deliveryTime,
        totalPrice,
        packageDetailID,
        status,
      });

      if (response == null) {
        return;
      }
    } catch (error) {}
  };

  const getCurrentTime = () => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleDateString(); // Lấy thời gian hiện tại dưới dạng chuỗi

    return currentTime;
  };
  const currentTime = getCurrentTime();

  const [summarys, setSummary] = useState([
    {
      summary: 'Subtotal',
      price: 45,
    },
    {
      summary: 'Service fee',
      price: 4.48,
    },
  ]);
  const [choosePayment, setChoosePayment] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModalVisible = bool => {
    setIsModalVisible(bool);
  };

  const [colorCredit, setColorCredit] = useState(colors.continues);
  const [colorPayPal, setColorPayPal] = useState('white');

  function onPressColorCredit() {
    setColorCredit(colors.continues);
    setColorPayPal('white');
  }
  function onPressColorPayPal() {
    setColorCredit('white');
    setColorPayPal(colors.continues);
  }

  const createOrder = async () => {
    try {
      console.log('cook roi:',cookies);
      let response = await axios.post(`${url}/order/create-order`
      ,{"post_id": post_id, "package_id": package_id}
      ,{headers: {
        Authorization: `Bearer ${cookies.cookie} `,
      }});
      if (response == null) {
        return;
      } 
      // let id = response.data.id;
      console.log(response.data);
      return response.data.id;
  }
  catch(error){
    console.log('createOrder')
    console.log(error)
  }
}


  const payment = async () => {
    try {
      let id = await createOrder();
      console.log(id);
      let response = await axios.get(
        `${url}/order/${id}/deposit`,
        {
          headers: {
            Authorization: `Bearer ${cookies.cookie} `,
          },
        },
      );
      console.log('1234', response);
      if (response == null) {
        return;
      }
    } catch (error) {
      console.log(error)
    }
  };
  const setPayment = data => {
    if (data === 'pay') {
      // createOrder();
      payment();
      Alert.alert('Thanh toán thành công');
      goBack();
    } else if (data === 'cancel') {
      setChoosePayment(data);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.ghostWhite,
      }}>
      <View
        style={{
          flex: 0.08,
          paddingHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
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
            alignItems: 'center',
            marginLeft: -20,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: colors.black,
              fontWeight: 'bold',
            }}>
            Order review
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.93,
        }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
              marginTop: 5,
              marginBottom: 15,
            }}>
            <Image
              style={{
                borderRadius: 5,
                height: 50,
                width: 70,
              }}
              source={git.image}
            />
            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                justifyContent: 'flex-start',
                fontSize: fontSizes.h5,
                color: colors.black,
              }}>
              {git.jobName}
            </Text>
          </View>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
          <Text
            style={{
              marginVertical: 15,
              marginLeft: 10,
              color: colors.black,
              fontSize: fontSizes.h5,
              fontWeight: 'bold',
            }}>
            Add payment method
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
              marginBottom: 15,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: colorCredit,
                borderColor: colors.placehoder,
              }}
              onPress={onPressColorCredit}
            />
            <Image
              style={{
                width: 30,
                height: 30,
                marginLeft: 10,
              }}
              source={icons.credit_card}
            />
            <Text
              style={{
                marginLeft: 10,
                color: colors.black,
                fontSize: fontSizes.h5,
              }}>
              Credit or Debit Card
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
              marginBottom: 15,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                borderWidth: 1,
                backgroundColor: colorPayPal,
                borderColor: colors.placehoder,
              }}
              onPress={onPressColorPayPal}
            />
            <Image
              style={{
                width: 32,
                height: 25,
                marginLeft: 10,
                borderRadius: 3,
                borderWidth: 2,
                borderColor: colors.inactive,
              }}
              source={icons.paypal}
            />
            <Text
              style={{
                marginLeft: 10,
                color: colors.black,
                fontSize: fontSizes.h5,
              }}>
              PayPal
            </Text>
          </View>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
          <Text
            style={{
              marginLeft: 10,
              marginVertical: 10,
              color: colors.black,
              fontSize: fontSizes.h5,
              fontWeight: 'bold',
            }}>
            Order details
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginHorizontal: 10,
              marginBottom: 3,
            }}>
            <View
              style={{
                flex: 0.1,
              }}>
              <Image
                style={{
                  width: 15,
                  height: 15,
                }}
                source={icons.check}
              />
            </View>

            <View
              style={{
                flex: 0.7,
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontSizes.h5,
                }}>
                CREATING ONE NEW{' '}
                {packageSelect.packageId === '1'
                  ? 'BASIC'
                  : packageSelect.packageId === '2'
                  ? 'STANDARD'
                  : 'PREMIUM'}
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontSizes.h5,
                }}>
                US${packageSelect.unitPrice}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 45,
              marginRight: 15,
              marginBottom: 3,
            }}>
            <FlatList
              data={request}
              renderItem={({item}) => (
                <OrderDetail request={item} key={item.nameRequest} />
              )}
              style={{flex: 1}}></FlatList>
          </View>

          <View
            style={{marginTop: 10, height: 1, backgroundColor: colors.inactive}}
          />
          <Text
            style={{
              marginLeft: 10,
              marginVertical: 10,
              color: colors.black,
              fontSize: fontSizes.h5,
              fontWeight: 'bold',
            }}>
            Order summary
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              marginBottom: 5,
            }}>
            <View
              style={{
                flex: 0.8,
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontSizes.h5,
                }}>
                Subtotal
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontSizes.h5,
                }}>
                US${packageSelect.unitPrice}
              </Text>
            </View>
          </View>
          <View
            style={{marginTop: 10, height: 1, backgroundColor: colors.inactive}}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginHorizontal: 10,
              marginTop: 10,
              marginBottom: 5,
            }}>
            <View
              style={{
                flex: 0.8,
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                }}>
                Total
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                }}>
                US${packageSelect.unitPrice}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginHorizontal: 10,
              marginBottom: 5,
            }}>
            <View
              style={{
                flex: 0.5,
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                }}>
                Delivery date
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: 'flex-end',
              }}>
              <Text
                style={{
                  color: colors.black,
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                }}>
                {currentTime}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 35,
              marginTop: 50,
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.continues,
              borderRadius: 5,
            }}
            onPress={() => changeModalVisible(true)}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                fontWeight: 'bold',
                color: 'white',
              }}>
              confirm
            </Text>
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              nRequestClose={() => changeModalVisible(false)}>
              <Payment
                changeModalVisible={changeModalVisible}
                setData={setPayment}
              />
            </Modal>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 5,
              marginBottom: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: fontSizes.h6,
                color: colors.placehoder,
              }}>
              your payment information is secure
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
