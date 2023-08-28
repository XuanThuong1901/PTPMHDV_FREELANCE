import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  Modal
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {images, icons, fontSizes, colors} from '../../../constants';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import {users, profileUsers, jobPosts, jobPostDetails} from '../../DataTest';
import Infor from './inforUser/infor';
import axios from 'axios';
import {url} from '../../../utilies/axios';
import ShowGit from './profile/ItemGit';
import AnalyticsBar from './AnalyticsBar ';
import { LogOut } from './LogOut';

export default function User(props) {
  const {navigation, onPress} = props;
  const {navigate} = navigation;
  const route = useRoute();
  const {cookie} = route.params;


  const handleDelete = (key) => {
    // Xóa phần tử có key tương ứng khỏi mảng gits
    const updatedPosts = post.filter(item => item.postID !== key);
    setPost(updatedPosts);
  };

  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const selectInfor = async () => {
    try {
      let response = await axios.get(`${url}/user/get-user`, {
        headers: {
          Authorization: `Bearer ${cookie} `,
        },
      });
      console.log(response);

      let userTemp = {};
      userTemp.firstName = response.data.first_name;
      userTemp.lastName = response.data.last_name;
      userTemp.education = response.data.education;
      let profileTemp = {};
      profileTemp.skill = response.data.profileDetail.my_skill;
      profileTemp.occupation = response.data.profileDetail.occupation;
      profileTemp.avatar = response.data.profileDetail.avatar;
      profileTemp.level = response.data.profileDetail.level;
      setUser(userTemp);
      setProfile(profileTemp);
      console.log(profile);
    } catch (error) {

    }
  };

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

  const [post, setPost] = useState([]);
  let posts = [];
  const selectPost = async () => {
    try {
      console.log('response');
      let response = await axios.get(`${url}/post/get-post-user`, {
        headers: {
          Authorization: `Bearer ${cookie} `,
        },
      });
      console.log(response.data);

      response.data.forEach(item => {
        let postTemp = {};
        postTemp.postID = item.post_id;
        postTemp.postName = item.post_name;
        postTemp.categoryDetail = item.category_detail_name;
        const randomNumber = Math.floor(Math.random() * 15);
        postTemp.image = image[randomNumber].image;
        posts.push(postTemp);

      });
      setPost(posts);
    } catch (error) {
      console.log(error)
    }
  };

  const totalEarnings = '$500';
  const totalCompletedOrders = 100;
  const averageSellingPrice = '$50';
  const earnedInCurrentMonth = '$200';

  useFocusEffect(React.useCallback(()=>{
    selectInfor();
    selectPost();
}, [])
)
 
  // useEffect(() => {
  //   selectInfor();
  //   selectPost();
  // }, []);

  const [isModalVisible, setisModalVisible] = useState(false);
  const openModalVisible = () => {
    setisModalVisible(true);
  };
  const closeModalVisible = () => {
    setisModalVisible(false);
  };
  const setLogout = async (option) => {
    if(option === 'Log Out'){
      try {
        console.log(cookie);
        let response = await axios.post(`${url}/auth/logout`, '',{
          headers: {
            Authorization: `Bearer ${cookie}`,
          },
        });
        console.log(response);
  
       navigate('Login')
      } catch (error) {
        console.log(error)
      }
    }
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
          borderBottomColor: colors.inactive,
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.9,
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h3,
                fontWeight: 'bold',
                color: 'black',
              }}>
              User
            </Text>
          </View>
          <View
            style={{
              flex: 0.1,
            }}>
            <TouchableOpacity
              onPress={openModalVisible}
            >
              <Image
                source={icons.setting}
                style={{
                  width: 22,
                  height: 22,
                }}
              />
            </TouchableOpacity>
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              nRequestClose={() => closeModalVisible}>
              <LogOut
                openModalVisible={openModalVisible}
                closeModalVisible={closeModalVisible}
                setData={setLogout}
              />
            </Modal>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.92,
        }}>
        <ScrollView>
          <View
            style={{
              marginHorizontal: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Image
                source={images.avatar}
                style={{
                  alignItems: 'center',
                  borderRadius: 50,
                  height: 80,
                  width: 80,
                  marginRight: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: fontSizes.h3,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  {user.firstName} {user.lastName}
                </Text>
                <Text
                  style={{
                    fontSize: fontSizes.h5,
                    color: 'black',
                  }}>
                  {user.education}
                </Text>
                <Text
                  style={{
                    fontSize: fontSizes.h5,
                    color: 'black',
                  }}></Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginVertical: 10,
                marginBottom: 20,
              }}>
              <TouchableOpacity
                style={{
                  width: 200,
                  height: 28,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: colors.continues,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigate('Infor', {cookie: cookie})
                }}>
                <Text
                  style={{
                    fontSize: fontSizes.h5,
                    color: colors.continues,
                    fontWeight: 'bold',
                  }}>
                  Information
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 1, backgroundColor: colors.inactive}} />

          <View>
            <AnalyticsBar
              totalEarnings={totalEarnings}
              totalCompletedOrders={totalCompletedOrders}
              averageSellingPrice={averageSellingPrice}
              earnedInCurrentMonth={earnedInCurrentMonth}
            />
            {/* Rest of your component */}
          </View>
          <View style={{height: 1, backgroundColor: colors.inactive}} />

          <View
            style={{
              flex: 1,
              backgroundColor: colors.inactive,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                margin: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={icons.profile}
                />
                <Text
                  style={{
                    margin: 10,
                    fontSize: fontSizes.h3,
                    color: colors.black,
                    fontWeight: 'bold',
                  }}>
                  ProfileUser
                </Text>
              </View>
              <View style={{height: 1, backgroundColor: colors.inactive}} />

              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  paddingVertical: 10,
                  alignItems: 'center',
                  marginHorizontal: 5,
                  borderBottomWidth: 1,
                  borderBottomColor: colors.inactive,
                }}>
                <View style={{flex: 0.3}}>
                  <Image
                    style={{
                      width: 80,
                      height: 60,
                    }}
                    source={profile.avatar}
                  />
                </View>
                <View style={{flex: 0.65}}>
                  <Text
                    style={{
                      fontSize: fontSizes.h4,
                      color: colors.black,
                      fontWeight: 'bold',
                    }}>
                    {profile.occupation}
                  </Text>
                  <View
                    style={{
                      marginBottom: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: fontSizes.h5,
                        color: colors.black,
                      }}>
                      {profile.skill}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.05,
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigate('CUProfile', {
                        cookie: cookie,
                        occupation: profile.occupation,
                        skill: profile.skill,
                        avatar: profile.avatar,
                        level: profile.level,
                        loading: loading
                      });
                    }}
                    style={{
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                      }}
                      source={icons.pen}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{height: 1, backgroundColor: colors.inactive}} />
          <View
            style={{
              flex: 1,
              backgroundColor: colors.inactive,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                margin: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  source={icons.profile}
                />
                <Text
                  style={{
                    margin: 10,
                    fontSize: fontSizes.h3,
                    color: colors.black,
                    fontWeight: 'bold',
                  }}>
                  Git
                </Text>
              </View>
              <View style={{height: 1, backgroundColor: colors.inactive}} />
              <FlatList
                data={post}
                renderItem={({item}) => (
                  <ShowGit
                    onPress={screenName => {
                      if (screenName === 'DeleteGit') handleDelete(item.postID);
                      else
                      navigate(screenName, {cookie: cookie, postID: item.postID, loading: loading})
                    }}
                    post={item}
                    key={item.key}
                  />
                )}
                style={{flex: 1}}></FlatList>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 20,
                  marginVertical: 10,
                }}>
                <TouchableOpacity
                  style={{
                    width: 200,
                    height: 35,
                    borderWidth: 1,
                    borderRadius: 25,
                    borderColor: colors.continues,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    navigate('CUGit', {
                      cookie: cookie,
                      postID:'',
                      loading: loading
                    });
                  }}>
                  <Text
                    style={{
                      fontSize: fontSizes.h5,
                      color: colors.continues,
                      fontWeight: 'bold',
                    }}>
                    + Create Git
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
