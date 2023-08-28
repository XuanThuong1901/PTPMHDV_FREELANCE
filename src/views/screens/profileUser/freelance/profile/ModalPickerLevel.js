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

// const [cotegoryDetail, setCotegoryDetail] = useState([])
// const categoryDetails = {}
// const selectPost = async () => {
//     try {
//       let response = await axios.get(`${url}/post/getCategoryDetails`,);
//       console.log(response);
//       if (response == null) {
//         return;
//       }
//       response.data.forEach(item => {
//         let cotegoryDetailTemp = {};
//       cotegoryDetailTemp.cotegoryDetailID = item.cotegory_detail_id
//       cotegoryDetailTemp.cotegoryDetailName = item.cotegory_detail_name;

//       // theem image
//       // postTemp.education = response.data.education;
//       categoryDetails.push(cotegoryDetailTemp);
//       });
//       setCotegoryDetail(categoryDetails);
      
//       setPost(postTemp);
//     } catch (error) {}
//   };

const options = ['Junior','Senior ','Expert','master']

const WHITE = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPickerLevel = (props) => {
  const onPressItem = (option) => {
    props.closeModalVisible();
    props.setData(option);
  };
  const option = options.map((item, index) => {
    return (
      <TouchableOpacity style={{
        marginVertical: 10,
        marginHorizontal: 20,
      }} key={index} onPress={() => onPressItem(item)}>
        <Text style={{
            color: colors.black, 
        }}>{item}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity style={{
        marginTop:  HEIGHT -200,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.inactive,
      }} onPress={() => props.closeModalVisible()}>
      <View >
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export {ModalPickerLevel};
