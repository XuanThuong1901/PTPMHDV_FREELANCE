import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../../../../constants';

const WHITE = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPickerCategory = (props) => {
  const onPressItem = option => {
    props.closeModalVisible();
    props.setData(option);
  };

//   const [cotegoryDetail, setCotegoryDetail] = useState([]);
//   const categoryDetails = [];
//   const selectCategory = async () => {
//     try {
//       let response = await axios.get(`${url}/post/get-category-details`);
//       console.log(response);
      
//       response.data.forEach(item => {
//         let cotegoryDetailTemp = {};
//         cotegoryDetailTemp.cotegoryDetailID = item.cotegory_detail_id;
//         cotegoryDetailTemp.cotegoryDetailName = item.cotegory_detail_name;

//         categoryDetails.push(cotegoryDetailTemp);
//       });
//       setCotegoryDetail(categoryDetails);

//       setPost(postTemp);
//     } catch (error) {}
//   };

//   useEffect(() => {
//     selectCategory();
//   });

  const option = props.cotegory.map((item, index) => {
    return (
      <TouchableOpacity
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
        }}
        key={index}
        onPress={() => onPressItem(item)}>
        <Text
          style={{
            color: colors.black,
          }}>
          {item.cotegoryDetailName}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity
      style={{
        marginTop: 200,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.inactive,
      }}
      onPress={() => props.closeModalVisible()}>
      <View>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export {ModalPickerCategory};
