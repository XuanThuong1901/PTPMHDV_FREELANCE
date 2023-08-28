import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  PermissionsAndroid,
  Linking,
  Alert,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import DocumentPicker from 'react-native-document-picker';
import {images, icons, fontSizes, colors} from '../../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UIButoon} from '../../../components';
import Mission from './Mission';
import axios from 'axios';
import { url } from '../../../utilies/axios';
import { useRoute } from '@react-navigation/native';

function DetailOrder(props) {
  // props
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;
  
  const route = useRoute();
  const {cookie, order} = route.params;

  const depositOrder = async () => {
    try {
      console.log(cookie)
      let response = await axios.get(`${url}/order/${order.order_id}/deposit`, {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      });
      Alert.alert('Xác nhận thành công')
      goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const [missions, setMissions] = useState([
    {
      mission: 'Deliver days',
      purview: order.delivery_day,
    },
    {
      mission: 'Revisions',
      purview: order.revison,
    },
    {
      mission: 'Competitor research',
      purview: '',
    },
    {
      mission: 'Social media handles',
      purview: '',
    },
    {
      mission: 'Trademark check',
      purview: '',
    },
    {
      mission: 'Domain research',
      purview: '',
    },
  ]);

  const [selectedFile, setSelectedFile] = useState([]);
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setSelectedFile([...selectedFile, result]);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // Hành động được thực hiện khi người dùng hủy tải tệp tin
        console.log('Hủy tải tệp tin');
      } else {
        console.log(error);
      }
    }
  };

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Ứng dụng cần quyền truy cập bộ nhớ',
            message:
              'Ứng dụng cần quyền truy cập bộ nhớ để lưu tệp tin tải lên',
            buttonPositive: 'Cho phép',
            buttonNegative: 'Không',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Quyền truy cập bộ nhớ được cấp');
        } else {
          console.log('Quyền truy cập bộ nhớ bị từ chối');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const [isDisabled, setIsDisabled] = useState(false);

  const renderTruncatedFooter = handlePress => {
    return (
      <Text style={{color: colors.continues}} onPress={handlePress}>
        Read more
      </Text>
    );
  };

  const renderRevealedFooter = handlePress => {
    return (
      <Text style={{color: colors.continues}} onPress={handlePress}>
        Collapse
      </Text>
    );
  };

  const openEmail = email => {
    Linking.openURL('mailto: nxthuong1901@gmail.com');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
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
            marginLeft: 10,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h3,
              color: colors.black,
              fontWeight: 'bold',
            }}>
            {order.post_name}
          </Text>
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
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
            }}>
            <Image
              style={{
                width: 70,
                height: 50,
                borderRadius: 5,
              }}
              source={images.item}
            />
            <View
              style={{
                flex: 1,
                marginLeft: 10,
              }}>
              <Text
                style={{
                  fontSize: fontSizes.h5,
                  color: colors.toolbar,
                }}>
                {order.post_name}
              </Text>
              <View
                style={{
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    marginTop: 5,
                    fontSize: fontSizes.h5,
                    color: colors.black,
                    fontWeight: 'bold',
                  }}>
                  $ {order.total_price}
                </Text>
              </View>
            </View>
          </View>
          <View style={{height: 15, backgroundColor: colors.inactive}} />
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                }}
                source={icons.file}
              />
              <View
                style={{
                  marginLeft: 15,
                }}>
                <Text
                  style={{
                    fontSize: fontSizes.h4,
                    color: colors.black,
                    fontWeight: 'bold',
                  }}>
                  Expected delivery {order.delivery_day}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    backgroundColor: colors.inactive,
                    borderRadius: 25,
                  }}>
                  <View
                    style={{
                      marginHorizontal: 25,
                      paddingVertical: 5,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: fontSizes.h4,
                        color: colors.black,
                        fontWeight: 'bold',
                      }}>
                      1
                    </Text>
                    <Text
                      style={{
                        fontSize: fontSizes.h4,
                        color: colors.toolbar,
                      }}>
                      Days
                    </Text>
                  </View>
                  <View
                    style={{
                      marginHorizontal: 25,
                      paddingVertical: 5,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: fontSizes.h4,
                        color: colors.black,
                        fontWeight: 'bold',
                      }}>
                      1
                    </Text>
                    <Text
                      style={{
                        fontSize: fontSizes.h4,
                        color: colors.toolbar,
                      }}>
                      Hours
                    </Text>
                  </View>
                  <View
                    style={{
                      marginHorizontal: 25,
                      paddingVertical: 5,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: fontSizes.h4,
                        color: colors.black,
                        fontWeight: 'bold',
                      }}>
                      1
                    </Text>
                    <Text
                      style={{
                        fontSize: fontSizes.h4,
                        color: colors.toolbar,
                      }}>
                      Minuters
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 20,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginRight: 40,
                    }}>
                    <Image
                      style={{height: 18, width: 18}}
                      source={icons.bells}
                    />
                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: fontSizes.h4,
                        color: colors.toolbar,
                      }}>
                      Notify me
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image style={{height: 18, width: 18}} source={icons.add} />
                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: fontSizes.h4,
                        color: colors.toolbar,
                      }}>
                      Add to Calendar
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{height: 1, backgroundColor: colors.inactive}} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                }}
                source={icons.file}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: 15,
                  marginRight: 25,
                }}>
                <Text
                  style={{
                    fontSize: fontSizes.h4,
                    color: colors.black,
                    fontWeight: 'bold',
                  }}>
                  Your delivery date was updated to {order.delivery_day}
                </Text>
                <View
                  style={{
                    marginTop: 10,
                    height: 1,
                    backgroundColor: colors.inactive,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                }}
                source={icons.clipboard}
              />
              <View
                style={{
                  flex: 1,
                  marginLeft: 15,
                  marginRight: 25,
                }}>
                <Text
                  style={{
                    fontSize: fontSizes.h4,
                    color: colors.black,
                    fontWeight: 'bold',
                  }}>
                  Order started
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              height: 1,
              backgroundColor: colors.inactive,
            }}
          />
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Image
              style={{
                height: 20,
                width: 20,
              }}
              source={icons.presentation}
            />
            <View
              style={{
                flex: 1,
                marginLeft: 15,
                marginRight: 10,
              }}>
              <Text
                style={{
                  fontSize: fontSizes.h4,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                Describe
              </Text>
              <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={renderTruncatedFooter}
                renderRevealedFooter={renderRevealedFooter}>
                <Text
                  style={{
                    fontSize: fontSizes.h5,
                    color: colors.black,
                  }}
                  numberOfLines={4}>
                    {order.description}
                  {'\n\n'}
                  {order.occupation}
                  {'\n\n'}
                  {order.my_skill}
                  {'\n\n'}
                </Text>
              </ReadMore>
            </View>
          </View>
          <View
            style={{marginTop: 10, height: 1, backgroundColor: colors.inactive}}
          />
          <View
            style={{
              flex: 1,
              marginLeft: 10,
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View
              style={{
                flex: 0.1,
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                }}
                source={icons.goal}
              />
            </View>
            <View
              style={{
                flex: 0.9,
              }}>
              <Text
                style={{
                  fontSize: fontSizes.h4,
                  color: colors.black,
                  fontWeight: 'bold',
                }}>
                Mission
              </Text>
              <FlatList
                data={missions}
                renderItem={({item}) => (
                  <Mission missions={item} key={item.mission} />
                )}
                style={{flex: 1}}></FlatList>
            </View>
          </View>
          <View
            style={{marginTop: 10, height: 1, backgroundColor: colors.inactive}}
          />

          {(order.status_order === 'Offer' || order.status_order === 'Completed') ? (
            <View
              style={{
                marginBottom: 30,
              }}
            />
          ) : (
            <View>
              <View
                style={{
                  flex: 1,
                  marginLeft: 10,
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    flex: 0.1,
                  }}>
                  <Image
                    style={{
                      height: 20,
                      width: 20,
                    }}
                    source={icons.goal}
                  />
                </View>
                <View
                  style={{
                    flex: 0.9,
                  }}>
                  <Text
                    style={{
                      fontSize: fontSizes.h4,
                      color: colors.black,
                      fontWeight: 'bold',
                    }}>
                    File submit
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      openEmail();
                    }}
                    style={{
                      height: 35,
                      marginTop: 10,
                      marginRight: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: colors.continues,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: fontSizes.h5,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Send file
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <TouchableOpacity
              style={{
                width: 100,
                height: 35,
                marginVertical: 40,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.continues,
                borderRadius: 5,
              }}
              // onPress={()=>{
              //   depositOrder();
              // }}
              >
              <Text
                style={{
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Complete
              </Text>
            </TouchableOpacity> */}
              {order.status_order === 'Delivery' ? 
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                <TouchableOpacity
              style={{
                width: 100,
                height: 35,
                marginVertical: 40,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.continues,
                borderRadius: 5,
              }}
              onPress={()=>{
                depositOrder();
              }}>
              <Text
                style={{
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Complete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 100,
                height: 35,
                marginVertical: 40,
                marginHorizontal: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.red,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                unfinished
              </Text>
            </TouchableOpacity>
              </View>:
              <View style={{
                marginBottom: 30,
              }}/>}
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

export default DetailOrder;
