import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import DocumentPicker from 'react-native-document-picker';
import {images, colors, icons, fontSizes} from '../../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ModalPickerCategory} from './ModalPickerCategory';
import Package from './Package';
import {profileUsers} from '../../../DataTest';
import axios from 'axios';
import {url} from '../../../../utilies/axios';
import {useRoute} from '@react-navigation/native';

export default function CUGit(props) {
  // props
  const {onPress, navigation} = props;
  // funciton of navigate to/back
  const {navigate, goBack} = navigation;
  const route = useRoute();
  const {cookie, postID, loading} = route.params;
  const [jobName, setJobName] = useState('');
  const [description, setDescription] = useState('');

  const [categoryDetail, setCategoryDetail] = useState('Select category');
  const [categoryID, setCategorID] = useState('');

  const [isModalVisible, setisModalVisible] = useState(false);
  const [packages, setPackages] = useState([]);

  const [package1, setPackage1] = useState({});
  const [package2, setPackage2] = useState({});
  const [package3, setPackage3] = useState({});

  const openModalVisible = () => {
    setisModalVisible(true);
  };
  const closeModalVisible = () => {
    setisModalVisible(false);
  };
  const setData = (option) => {
    setCategoryDetail(option.cotegoryDetailName);
    setCategorID(option.cotegoryDetailID);
  };
  // const [post, setPost] = useState([]);
  let packagess = [];
  const selectPost = async () => {
    try {
      console.log(postID);
      let response = await axios.get(`${url}/post/get-post/${postID}`);
      console.log(response);
      if (response == null) {
        return;
      }
      console.log(response);
      const post = response.data;

      setJobName(post.post_name);
      setDescription(post.post_detail.description);
      setCategoryDetail(post.category_detail_name);
      let packageTemp1 = {};
      
      packageTemp1.revision =
        post.post_detail.packages[0].package_detail.revision;
        packageTemp1.delivery_day =
        post.post_detail.packages[0].package_detail.delivery_day;
      packageTemp1.unit_price =
        post.post_detail.packages[0].package_detail.unit_price;

      let packageTemp2 = {};
      
      packageTemp2.revision =
        post.post_detail.packages[1].package_detail.revision;
        packageTemp2.delivery_day =
        post.post_detail.packages[1].package_detail.delivery_day;
      packageTemp2.unit_price =
        post.post_detail.packages[1].package_detail.unit_price;

      let packageTemp3 = {};
      
      packageTemp3.revision =
        post.post_detail.packages[2].package_detail.revision;
        packageTemp3.delivery_day =
        post.post_detail.packages[2].package_detail.delivery_day;
      packageTemp3.unit_price =
        post.post_detail.packages[2].package_detail.unit_price;
      setPackage1(packageTemp1);
      setPackage2(packageTemp2);
      setPackage3(packageTemp3);

      console.log(package1);
      console.log(package2);
      console.log(package3);
    } catch (error) {}
  };

  const [colorBasic, setColorBasic] = useState(colors.continues);
  const [colorStandard, setColorStandard] = useState(colors.placehoder);
  const [colorPremium, setColorPremium] = useState(colors.placehoder);

  function onPressColorBasic() {
    setColorBasic(colors.continues);
    setColorStandard(colors.placehoder);
    setColorPremium(colors.placehoder);
  }
  function onPressColorStandard() {
    setColorBasic(colors.placehoder);
    setColorStandard(colors.continues);
    setColorPremium(colors.placehoder);
  }
  function onPressColorPremium() {
    setColorBasic(colors.placehoder);
    setColorStandard(colors.placehoder);
    setColorPremium(colors.continues);
  }

  const upadatePost = async () => {
    let updatePostTemp = {};
    updatePostTemp.post_name = jobName;
    updatePostTemp.category_detail_name = categoryDetail;
    updatePostTemp.post_detail={}
    updatePostTemp.post_detail.description = description;
    updatePostTemp.post_detail.packages=[]
    updatePostTemp.post_detail.packages[0]={}
    updatePostTemp.post_detail.packages[0].package_id = 0;
    updatePostTemp.post_detail.packages[0].package_name = 'Basic';
    updatePostTemp.post_detail.packages[0].package_detail = package1;
    updatePostTemp.post_detail.packages[1]={}
    updatePostTemp.post_detail.packages[1].package_id = 1;
    updatePostTemp.post_detail.packages[1].package_name = 'standard';
    updatePostTemp.post_detail.packages[1].package_detail = package2;
      updatePostTemp.post_detail.packages[2]={}
    updatePostTemp.post_detail.packages[2].package_id = 2;
    updatePostTemp.post_detail.packages[2].package_name = 'premium';
    updatePostTemp.post_detail.packages[2].package_detail = package3;

    try {
      let response = await axios.post(
        `${url}/post/update-post/${postID}`,
        updatePostTemp,
        {
          headers: {
            Authorization: `Bearer ${cookie} `,
          },
        },
      );
      console.log(response);
      if (response == null) {
        return;
      }
      loading();
      Alert.alert('Tạo git thành công')
      goBack();
    } catch (error) {}
  };

  const createPost = async () => {
    let updatePostTemp = {};
    updatePostTemp.post_name = jobName;
    updatePostTemp.category_detail_name = categoryDetail;
    updatePostTemp.post_detail={}
    updatePostTemp.post_detail.description = description;
    updatePostTemp.post_detail.packages=[]
    updatePostTemp.post_detail.packages[0]={}
    updatePostTemp.post_detail.packages[0].package_id = 0;
    updatePostTemp.post_detail.packages[0].package_name = 'Basic';
    updatePostTemp.post_detail.packages[0].package_detail = package1;
    updatePostTemp.post_detail.packages[1]={}
    updatePostTemp.post_detail.packages[1].package_id = 1;
    updatePostTemp.post_detail.packages[1].package_name = 'standard';
    updatePostTemp.post_detail.packages[1].package_detail = package2;
      updatePostTemp.post_detail.packages[2]={}
    updatePostTemp.post_detail.packages[2].package_id = 2;
    updatePostTemp.post_detail.packages[2].package_name = 'premium';
    updatePostTemp.post_detail.packages[2].package_detail = package3;

    try {
      let response = await axios.post(
        `${url}/post/create-order`,
        updatePostTemp,
        {
          headers: {
            Authorization: `Bearer ${cookie} `,
          },
        },
      );
      console.log(response);
      if (response == null) {
        return;
      }
      Alert.alert('Tạo git thành công')
      goBack();
    } catch (error) {}
  };

  const updatePackageBasci = updatedValues => {
    setPackage1(updatedValues);
  };
  const updatePackageStandard = updatedValues => {
    setPackage2(updatedValues);
  };
  const updatePackagePremium = updatedValues => {
    setPackage3(updatedValues);
  };

  const [cotegoryDetail, setCotegoryDetail] = useState([]);
  const categoryDetails = [];
  const selectCategory = async () => {
    try {
      let response = await axios.get(`${url}/post/get-category-details`);
      console.log(response);
      
      response.data.forEach(item => {
        let cotegoryDetailTemp = {};
        cotegoryDetailTemp.cotegoryDetailID = item.category_detail_id;
        cotegoryDetailTemp.cotegoryDetailName = item.category_detail_name;
        categoryDetails.push(cotegoryDetailTemp);
      });
      console.log(categoryDetails);
      setCotegoryDetail(categoryDetails);
      console.log(categoryDetail);
    } catch (error) {}
  };

  // selectCategory();

  useEffect(() => {
    if (postID !== '') {
      selectPost();
    }
    selectCategory();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.ghostWhite,
      }}>
      <View
        style={{
          flex: 0.08,
          marginHorizontal: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: colors.inactive,
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
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: fontSizes.h3,
              color: colors.black,
              fontWeight: 'bold',
            }}>
            Git
          </Text>
        </View>
        <TouchableOpacity
          onPress={()=>{
            createPost();
          }}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 7,
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: fontSizes.h4,
              color: colors.continues,
              fontWeight: 'bold',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.93,
        }}>
        <ScrollView>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.black,
                fontWeight: 'bold',
              }}>
              Name Git
            </Text>
            <TextInput
              value={jobName}
              onChangeText={text => setJobName(text)}
              placeholder="Name git"
              placeholderTextColor={colors.placehoder}
              style={{
                color: colors.black,
                backgroundColor: colors.inactive,
                height: 40,
                borderRadius: 10,
                paddingStart: 10,
                marginTop: 5,
              }}
            />
          </View>

          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.black,
                fontWeight: 'bold',
              }}>
              Category
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 5,
                paddingVertical: 10,
                backgroundColor: colors.inactive,
                borderRadius: 10,
              }}
              onPress={openModalVisible}>
              <Text
                style={{
                  marginLeft: 10,
                  color: colors.black,
                  fontSize: fontSizes.h5,
                }}>
                {categoryDetail}
              </Text>
            </TouchableOpacity>
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              nRequestClose={() => closeModalVisible}>
              <ModalPickerCategory
                openModalVisible={openModalVisible}
                closeModalVisible={closeModalVisible}
                setData={setData}
                cotegory = {cotegoryDetail}
              />
            </Modal>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.black,
                fontWeight: 'bold',
              }}>
              Description
            </Text>
            <TextInput
              value={description}
              onChangeText={text => setDescription(text)}
              placeholder="Description"
              placeholderTextColor={colors.placehoder}
              style={{
                color: colors.black,
                backgroundColor: colors.inactive,
                height: 100,
                borderRadius: 10,
                paddingStart: 10,
                marginTop: 5,
              }}
            />
          </View>

          <View
            style={{
              height: 45,
              flexDirection: 'row',
              marginTop: 5,
              marginHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.33,
                borderBottomColor:
                  colorBasic === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorBasic}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorBasic,
                }}>
                Basic
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.33,
                borderBottomColor:
                  colorStandard === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorStandard}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorStandard,
                }}>
                Standard
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.33,
                borderBottomColor:
                  colorPremium === colors.continues
                    ? colors.continues
                    : colors.inactive,
                borderBottomWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              activeOpacity={0.8}
              onPress={onPressColorPremium}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: fontSizes.h5,
                  fontWeight: 'bold',
                  color: colorPremium,
                }}>
                Premium
              </Text>
            </TouchableOpacity>
          </View>
          {colorBasic == colors.continues ? (
            <Package packages={package1} updatePackage={updatePackageBasci} />
          ) : colorStandard == colors.continues ? (
            <Package
              packages={package2}
              updatePackage={updatePackageStandard}
            />
          ) : (
            <Package packages={package3} updatePackage={updatePackagePremium} />
          )}
        </ScrollView>
      </View>
    </View>
  );
}
