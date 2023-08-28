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
  Dimensions,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Target from './target';
import Request from './Request';
import ItemHome from '../home/ItemHome';
import {useRoute} from '@react-navigation/native';
import DetailPackage from './packageDetail';
import axios from 'axios';
import {url} from '../../utilies/axios';
import {
  users,
  profileUsers,
  levels,
  categorys,
  categoryDetails,
  jobPosts,
  jobPostDetails,
  packageDetails,
} from '../DataTest';

export default function DetailItem(props) {
  const route = useRoute();
  // props
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;

  let {cookie, jobPostID, image, description, level} = route.params;
  // let jobPostID = '7';

  const [package1, setPackage1] = useState({});
  const [package2, setPackage2] = useState({});
  const [package3, setPackage3] = useState({});
  const [packageSelect, setPackageSelect] = useState({});

  // let gitTemp = {};

  const [git, setGit] = useState({});

  let post = {};
  const selectPost = async () => {
    try {
      let response = await axios.get(`${url}/post/get-post/${jobPostID}`);
      console.log(response);
      if (response == null) {
        return;
      }

      const postTemp = response.data;
      post.postID = postTemp.post_id;
      post.userName = postTemp.post_detail.profile_user;
      post.image = image;
      post.avatar = images.avatar;
      post.occupation = description;
      post.level = level;
      post.jobName = postTemp.post_name;
      post.description = postTemp.post_detail.description;

      console.log(post);
      
      postTemp.post_detail.packages.forEach(function (item) {
        console.log(item);
        let packageTemp = {};
        packageTemp.packageId = item.package_id;
        packageTemp.packageName = item.package_name;
        packageTemp.deliveryDay = item.package_detail.delivery_day;
        packageTemp.revision = item.package_detail.revision;
        packageTemp.unitPrice = item.package_detail.unit_price;
        console.log('temp: ',packageTemp);
        if (packageTemp.packageId === 0) {
          setPackage1(packageTemp);
        } else if (packageTemp.packageId === 1) {
          setPackage2(packageTemp);
        } else {
          setPackage3(packageTemp);
        }
      });

      setGit(post);
    } catch (error) {}
  };

  const [request, setRequest] = useState([
    {
      nameRequest: 'Deliver days',
      purview: package1.deliveryDay,
    },
    {
      nameRequest: 'Revisions',
      purview: package1.revision,
    },
    {
      nameRequest: 'Competitor research',
      purview: true,
    },
    {
      nameRequest: 'Social media handles',
      purview: true,
    },
    {
      nameRequest: 'Trademark check',
      purview: true,
    },
    {
      nameRequest: 'Domain research',
      purview: true,
    },
  ]);

  const onPressSetRequest = () => {
    if (colorMoney1 === colors.continues) {
      request[0].purview = package1.deliveryDay;
      request[1].purview = package1.revision;
    } else if (colorMoney1 === colors.continues) {
      request[0].purview = package2.deliveryDay;
      request[1].purview = package2.revision;
    } else {
      request[0].purview = package3.deliveryDay;
      request[1].purview = package3.revision;
    }
  };

  useEffect(() => {
    // addGits();
    // addGit();
    selectPost();
  }, []);

  const [heart, setHeart] = useState(icons.heart);
  const onPressHeart = () => {
    if (heart === icons.heart) setHeart(icons.heart1);
    else setHeart(icons.heart);
  };

  const [isDisabled, setIsDisabled] = useState(false);

  const renderTruncatedFooter = handlePress => {
    return (
      <Text style={{color: colors.continues}} onPress={handlePress}>
        Đọc thêm
      </Text>
    );
  };

  const renderRevealedFooter = handlePress => {
    return (
      <Text style={{color: colors.continues}} onPress={handlePress}>
        Thu gọn
      </Text>
    );
  };

  const [colorMoney1, setColorMoney1] = useState(colors.continues);
  const [colorMoney2, setColorMoney2] = useState(colors.placehoder);
  const [colorMoney3, setColorMoney3] = useState(colors.placehoder);

  const updateRequest = (deliveryDay, revision) => {
    const updateRequest = request.map(item => {
      if (item.nameRequest === 'Deliver days') {
        return {
          ...item,
          purview: deliveryDay,
        };
      }
      if (item.nameRequest === 'Revisions') {
        return {
          ...item,
          purview: revision,
        };
      }
      return item;
    });
    setRequest(updateRequest);
  };

  function onPressColorMoney3() {
    setColorMoney2(colors.placehoder);
    setColorMoney1(colors.placehoder);
    setColorMoney3(colors.continues);
    updateRequest(package3.deliveryDay, package3.revision);
    setPackageSelect(package3);
  }
  function onPressColorMoney1() {
    setColorMoney1(colors.continues);
    setColorMoney2(colors.placehoder);
    setColorMoney3(colors.placehoder);
    updateRequest(package1.deliveryDay, package1.revision);
    setPackageSelect(package1);
  }
  function onPressColorMoney2() {
    setColorMoney1(colors.placehoder);
    setColorMoney3(colors.placehoder);
    setColorMoney2(colors.continues);
    updateRequest(package2.deliveryDay, package2.revision);
    setPackageSelect(package2);
  }

  const [colorButton, setColorButton] = useState('white');
  const opPressClickButton = () => {
    if (colorButton === 'white') setColorButton(colors.continues);
    else setColorButton('white');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.ghostWhite,
      }}>
      <View
        style={{
          flex: 0.07,
          marginHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
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
        <TouchableOpacity
          style={{
            alignItems: 'flex-end',
          }}
          onPress={onPressHeart}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={heart}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.93,
        }}>
        <ScrollView>
          <View>
            <Image
              style={{
                height: 200,
                width: Dimensions.get('screen').width,
              }}
              source={image}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 15,
              marginLeft: 15,
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
              }}
              source={git.avatar}
            />
            <View
              style={{
                marginLeft: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: fontSizes.h6,
                  color: colors.black,
                }}>
                {git.userName}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: fontSizes.h6,
                  color: colors.placehoder,
                }}>
                Level: {level}
              </Text>
            </View>
          </View>
          <View style={{height: 1, backgroundColor: colors.placehoder}} />
          <View
            style={{
              marginVertical: 15,
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                marginBottom: 10,
                fontSize: fontSizes.h2,
                fontWeight: 'bold',
                color: colors.black,
              }}>
              {git.jobName}
            </Text>
            <ReadMore
              numberOfLines={4}
              renderTruncatedFooter={renderTruncatedFooter}
              renderRevealedFooter={renderRevealedFooter}>
              <Text
                style={{
                  marginEnd: 20,
                  fontSize: fontSizes.h5,
                  color: colors.black,
                }}
                numberOfLines={4}>
                {git.description}
                {'\n\n'}
                {git.occupation}
                {'\n\n'}
              </Text>
            </ReadMore>
          </View>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginHorizontal: 20,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 30,
                  borderBottomColor:
                    colorMoney1 === colors.continues
                      ? colors.continues
                      : colors.inactive,
                  borderBottomWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={onPressColorMoney1}>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold',
                    color: colorMoney1,
                  }}>
                  US${package1.unitPrice}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 30,
                  borderBottomColor:
                    colorMoney2 === colors.continues
                      ? colors.continues
                      : colors.inactive,
                  borderBottomWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={onPressColorMoney2}>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold',
                    color: colorMoney2,
                  }}>
                  US${package2.unitPrice}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 30,
                  borderBottomColor:
                    colorMoney3 === colors.continues
                      ? colors.continues
                      : colors.inactive,
                  borderBottomWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={onPressColorMoney3}>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold',
                    color: colorMoney3,
                  }}>
                  US${package3.unitPrice}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                margin: 20,
              }}>
              {colorMoney1 === colors.continues ? (
                <DetailPackage package={package1} request={request} />
              ) : colorMoney2 === colors.continues ? (
                <DetailPackage package={package2} request={request} />
              ) : (
                <DetailPackage package={package3} request={request} />
              )}

              <TouchableOpacity
                style={{
                  marginTop: 20,
                  height: 37,
                  backgroundColor: colors.continues,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigate('OrderReview', {cookie: cookie, request: request, git:git , packageSelect: packageSelect});
                }}
                >
                <Text
                  style={{
                    color: 'white',
                    fontSize: fontSizes.h5,
                    fontWeight: 'bold',
                  }}>
                  Continue (US$
                  {colorMoney1 === colors.continues
                    ? package1.unitPrice
                    : colorMoney2 === colors.continues
                    ? package2.unitPrice
                    : package3.unitPrice}
                  )
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
          <View
            style={{
              marginVertical: 20,
              marginLeft: 15,
            }}>
            <Text
              style={{
                marginBottom: 5,
                color: colors.black,
                fontWeight: 'bold',
                fontSize: fontSizes.h4,
              }}>
              People also viewed
            </Text>
          </View>
          {/* <FlatList
            horizontal
            data={gits}
            renderItem={({item}) => (
              <ItemHome
                onPress={() => {
                  navigate('DetailItem');
                }}
                git={item}
                key={item.jobPostDetailID}
              />
            )}
            style={{flex: 1}}
          /> */}
        </ScrollView>
        <TouchableOpacity
          style={{
            width: 90,
            height: 40,
            marginEnd: -10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 15,
            position: 'absolute',
            bottom: 20,
            right: 20,
          }}
          disabled={isDisabled}
          onPress={() => {
            navigate('Messenger');
          }}>
          <Image
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
              marginRight: 5,
            }}
            source={images.avatar}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color: colors.black,
              fontSize: fontSizes.h5,
            }}>
            Chat
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
