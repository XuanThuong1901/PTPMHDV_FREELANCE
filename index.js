/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/views/navigation/App';
import { name as appName } from './app.json';
import Home from './src/views/screens/home/home';
import { DetailOrder, ManageOrder, User } from './src/views/screens';
import ListItem from './src/views/screens/listItem/ListItem';
import DetailItem from './src/views/screens/listItem/DetailItem';
import Search from './src/views/screens/search/search';
import DetailCategory from './src/views/screens/search/DetailCategory';
import Order from './src/views/screens/order/OrderReview';
import Upgrade from './src/views/screens/order/Upgrade';
import MainProfile from './src/views/screens/profileUser/freelance/User';
// chua xong: sửa lại regiter , Inbox, mess, Mainprofile chưa thêm tiền, show các offer (offer chưa, offer được nhận, offer hoàn thành), chi tiêt offer, 
import Offer from './src/views/screens/manageOrders/Offer/Offer';
import Inbox from './src/views/screens/inbox/Chat';
import Messenger from './src/views/screens/inbox/Messenger';
import login from './src/views/screens/login';
import ManageOffer from './src/views/screens/manageOrders/Offer/ManageOffer';
import MainManage from './src/views/screens/manageOrders/MainManage';

import Test from './src/views/axios/testAxios';

import CUProfile from './src/views/screens/profileUser/freelance/profile/CUProfile';
import CUGit from './src/views/screens/profileUser/freelance/profile/CUGit';
import Payment from './src/views/screens/order/payment';
import DetailOffer from './src/views/screens/manageOrders/Offer/DetailOffer';

AppRegistry.registerComponent( appName, () => App);
