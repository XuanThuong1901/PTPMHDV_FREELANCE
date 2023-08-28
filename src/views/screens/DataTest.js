import React, {useState, useEffect} from 'react';
import { images, icons } from '../constants';

let accounts = [{
  email: 'nxthuong1901@gmail.com',
  password: '123',
  active: true,
},
{
  email: 'nxthuong0119@gmail.com',
  password: '123',
  active: true,
},
{
  email: '1',
  password: '1',
  active: true,
},]
let users= [
  {
    userID: '1',
    email: 'nxthuong1901@gmail.com',
    firstName: 'Nguyễn',
    lastName: 'Thường',
    avatar: images.avatar,
    gender: '',
    birthday: '19-01-2000',
    address: '',
    phoneNumber: '011111111',
    education: 'PTIT',
  },
  {
    userID: '2',
    email: 'nxthuong0119@gmail.com',
    firstName: 'Nguyễn',
    lastName: 'Thường',
    avatar: images.avatar,
    gender: '',
    birthday: '19-01-2000',
    address: '',
    phoneNumber: '011111111',
    education: 'PTIT',
  },
  {
    userID: '3',
    email: '1',
    firstName: 'Nguyễn',
    lastName: 'Thường',
    avatar: images.avatar,
    gender: '',
    birthday: '19-01-2000',
    address: '',
    phoneNumber: '011111111',
    education: 'PTIT',
  },
]
let profileUsers = [
  {
    profileID: '1',
    inforID: '1',
    avatar: images.item,
    occupation: 'tào lao',
    skill: 'bí đao',
    levelID: '1',
  },
  {
    profileID: '2',
    inforID: '1',
    avatar:  images.item,
    occupation: 'tào lao',
    skill: 'bí đao',
    levelID: '2',
  },
  {
    profileID: '3',
    inforID: '1',
    avatar:  images.item,
    occupation: 'tào lao',
    skill: 'bí đao',
    levelID: '1',
  },
  {
    profileID: '4',
    inforID: '1',
    avatar:  images.item,
    occupation: 'tào lao',
    skill: 'bí đao',
    levelID: '3',
  },
]
let levels = [
  {
    levelID: '1',
    levelName: 'Beginner',
    levelDetail: 'Beginner',
  },
  {
    levelID: '2',
    levelName: 'Intermediate',
    levelDetail: 'Intermediate',
  },
  {
    levelID: '3',
    levelName: 'Expert',
    levelDetail: 'Expert',
  },
]

// Danh mục
let categorys = [
  {
    categoryID: 1,
    categoryName: 'Griphics & Design',
    description: 'Logo & Brand Identity, Gaming',
    url: icons.graphic,
  },
  {
    categoryID: 2,
    categoryName: 'Digital Marketing',
    description: 'Social Media Marketing, Search Engine Optimization (SEO)',
    url: icons.marketing,
  },
  {
    categoryID: 3,
    categoryName: 'Writing & Traslation',
    description: 'Artiles & Blog Posts, Translation',
    url: icons.writing,
  },
  {
    categoryID: 4,
    categoryName: 'Video & Animation',
    description: 'Video Editing, Video Ads & Commercials',
    url: icons.video,
  },
  {
    categoryID: 5,
    categoryName: 'Music & Audio',
    description: 'Producers & Composers, Mizing & Mastering',
    url: icons.music,
  },
  {
    categoryID: 6,
    categoryName: 'Programming & Tech',
    description: 'Website Development, Website Maintenance',
    url: icons.programming,
  },
  {
    categoryID: 7,
    categoryName: 'Data',
    description: 'Databases, data Processing',
    url: icons.data,
  },
  {
    categoryID: 8,
    categoryName: 'Business',
    description: 'Virtual Assistant, E-Commerce Management',
    url: icons.business,
  },
  {
    categoryID: 9,
    categoryName: 'Lifestyle',
    description: 'Self Improvement, Wellness & Fitness',
    url: icons.lifestyle,
  },
  {
    categoryID: 10,
    categoryName: 'Photography',
    description: 'Product Photographers, Portrait Photographers',
    url: icons.photography,
  },
  {
    categoryID: 11,
    categoryName: 'AI Services',
    description: 'AI Artists, Build your dream AI app',
    url: icons.AI,
  },
]
let categoryDetails=[
  {
    categoryID: 1,
    categoryDetailID: 1,
    categoryDetailName: 'Logo Design',
    image:'https://static.wixstatic.com/media/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png',

  },
  {
    categoryID: 1,
    categoryDetailID: 2,
    categoryDetailName: 'Brand Style Guides',
    image: 'https://static.wixstatic.com/media/84b06e_0570f131bb82434e8307ecd5bb177811~mv2.jpg/v1/fill/w_723,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84b06e_0570f131bb82434e8307ecd5bb177811~mv2.jpg',
  },
  {
    categoryID: 1,
    categoryDetailID: 3,
    categoryDetailName: 'Business Cards & Stationery',
    image : 'https://vowels.co.in/blog/wp-content/uploads/2021/11/how-to-create-brand-indentity.jpg',

  },
  {
    categoryID: 1,
    categoryDetailID: 4,
    categoryDetailName: 'Game Art',
    image: 'https://static.wixstatic.com/media/84b06e_967d0fa3ef1e498d83f9a916e765839c~mv2.jpg/v1/fill/w_723,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_967d0fa3ef1e498d83f9a916e765839c~mv2.jpg',
  },
  {
    categoryID: 1,
    categoryDetailID: 5,
    categoryDetailName: 'Graphics for Streamers',
    image: 'https://static.semrush.com/blog/uploads/media/3b/88/3b888b0cae0da0e612682a2a3181d9b9/image11.webp',
  },
  {
    categoryID: 1,
    categoryDetailID: 6,
    categoryDetailName: 'Twitch Store',
    image:  'https://static.semrush.com/blog/uploads/media/dc/a4/dca4a96151aa5fc3cf8858699eb8520a/image8.webp',
  },
  {
    categoryID: 1,
    categoryDetailID: 7,
    categoryDetailName: 'Illustration',
    image: 'https://www.mentionlytics.com/wp-content/uploads/2016/09/20160101-wo12e.jpg',
  },
  {
    categoryID: 2,
    categoryDetailID: 8,
    categoryDetailName: 'Logo Design',
    image: 'https://www.columnfivemedia.com/wp-content/uploads/2021/08/Brand-Identity-Assets-3.webp',
  },
  {
    categoryID: 2,
    categoryDetailID: 9,
    categoryDetailName: 'Brand Style Guides',
    image:'https://static.wixstatic.com/media/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png',
  },
  {
    categoryID: 2,
    categoryDetailID: 10,
    categoryDetailName: 'Business Cards & Stationery',
    image: 'https://static.wixstatic.com/media/84b06e_0570f131bb82434e8307ecd5bb177811~mv2.jpg/v1/fill/w_723,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84b06e_0570f131bb82434e8307ecd5bb177811~mv2.jpg',

  },
  {
    categoryID: 2,
    categoryDetailID: 11,
    categoryDetailName: 'Game Art',
    image: 'https://static.semrush.com/blog/uploads/media/dc/a4/dca4a96151aa5fc3cf8858699eb8520a/image8.webp',

  },
  {
    categoryID: 2,
    categoryDetailID: 12,
    categoryDetailName: 'Graphics for Streamers',
    image: 'https://www.mentionlytics.com/wp-content/uploads/2016/09/20160101-wo12e.jpg',

  },
  {
    categoryID: 2,
    categoryDetailID: 13,
    categoryDetailName: 'Twitch Store',
    image: 'https://www.columnfivemedia.com/wp-content/uploads/2021/08/Brand-Identity-Assets-3.webp',

  },
  {
    categoryID: 2,
    categoryDetailID: 14,
    categoryDetailName: 'Illustration',
    image: 'https://vowels.co.in/blog/wp-content/uploads/2021/11/how-to-create-brand-indentity.jpg',

  },
  {
    categoryID: 3,
    categoryDetailID: 15,
    categoryDetailName: 'Illustration',
    image: 'https://static.wixstatic.com/media/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png/v1/fill/w_723,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_c6eba792b09f4cf2bc555f26a381e1cb~mv2.png',

  },
  {
    categoryID: 4,
    categoryDetailID: 16,
    categoryDetailName: 'Illustration',
    image: 'https://static.wixstatic.com/media/84b06e_0570f131bb82434e8307ecd5bb177811~mv2.jpg/v1/fill/w_723,h_459,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84b06e_0570f131bb82434e8307ecd5bb177811~mv2.jpg',
  },
  {
    categoryID: 5,
    categoryDetailID: 17,
    categoryDetailName: 'Illustration',
    image: 'https://static.semrush.com/blog/uploads/media/dc/a4/dca4a96151aa5fc3cf8858699eb8520a/image8.webp',

  },
  {
    categoryID: 6,
    categoryDetailID: 18,
    categoryDetailName: 'Illustration',
    image: 'https://static.wixstatic.com/media/84b06e_967d0fa3ef1e498d83f9a916e765839c~mv2.jpg/v1/fill/w_723,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84b06e_967d0fa3ef1e498d83f9a916e765839c~mv2.jpg',

  },
  {
    categoryID: 7,
    categoryDetailID: 19,
    categoryDetailName: 'Illustration',
    image: 'https://www.mentionlytics.com/wp-content/uploads/2016/09/20160101-wo12e.jpg',

  },
  {
    categoryID: 8,
    categoryDetailID: 20,
    categoryDetailName: 'Illustration',
    image: 'https://www.columnfivemedia.com/wp-content/uploads/2021/08/Brand-Identity-Assets-3.webp',

  },
  {
    categoryID: 9,
    categoryDetailID: 21,
    categoryDetailName: 'Illustration',
    image: 'https://www.columnfivemedia.com/wp-content/uploads/2021/08/Brand-Identity-Assets-3.webp',

  },
  {
    categoryID: 10,
    categoryDetailID: 22,
    categoryDetailName: 'Illustration',
    image: 'https://www.mentionlytics.com/wp-content/uploads/2016/09/20160101-wo12e.jpg',

  },
  {
    categoryID: 11,
    categoryDetailID: 23,
    categoryDetailName: 'Illustration',
    image: 'https://static.semrush.com/blog/uploads/media/dc/a4/dca4a96151aa5fc3cf8858699eb8520a/image8.webp',
  },
]
let jobPosts=[{
  jobPostID: 1,
  categoryFetailID: 1,
  jobName: 'thiết kế hệ thống',
  timestamp: '19-5-2023',
},
{
  jobPostID: 2,
  categoryFetailID: 2,
  jobName: 'thiết kế andorid',
  timestamp: '19-5-2023',
},
{
  jobPostID: 3,
  categoryFetailID: 11,
  jobName: 'thiết kế andorid',
  timestamp: '19-5-2023',
},
{
  jobPostID: 4,
  categoryFetailID: 21,
  jobName: 'thiết kế andorid',
  timestamp: '19-5-2023',
},]

//Git
let jobPostDetails = [
  {
    jobPostID: 1,
    jobPostDetailID: 1,
    profileID: '1',
    description: 'Thiết kế hệ thống',
  },
  {
    jobPostID: 2,
    jobPostDetailID: 2,
    profileID: '1',
    description: 'Thiết kế hệ thống',
  },
  {
    jobPostID: 3,
    jobPostDetailID: 3,
    profileID: '1',
    description: 'Thiết kế hệ thống',
  },
  {
    jobPostID: 4,
    jobPostDetailID: 4,
    profileID: '1',
    description: 'Thiết kế hệ thống',
  },
]
let packages = [
  {
  packageId: '1',
  packageName: 'basic',
},
{
  packageId: '2',
  packageName: 'standard',
},
{
  packageId: '3',
  packageName: 'premium',
},
]
let packageDetails=[
  {
    packageId: '1',
    jobPostID: 1,
    unitPrice: 52,
    revision: '1',
    deliveryDay: '4',
  },
  {
    packageId: '2',
    jobPostID: 1,
    unitPrice: 72,
    revision: '4',
    deliveryDay: '2',
  },
  {
    packageId: '3',
    jobPostID: 1,
    unitPrice: 102,
    revision: '7',
    deliveryDay: '1',
  },
  {
    packageId: '1',
    jobPostID: 2,
    unitPrice: 72,
    revision: '1',
    deliveryDay: '4',
  },
  {
    packageId: '2',
    jobPostID: 2,
    unitPrice: 72,
    revision: '4',
    deliveryDay: '2',
  },
  {
    packageId: '3',
    jobPostID: 2,
    unitPrice: 102,
    revision: '7',
    deliveryDay: '1',
  },
  {
    packageId: '1',
    jobPostID: 3,
    unitPrice: 72,
    revision: '1',
    deliveryDay: '4',
  },
  {
    packageId: '2',
    jobPostID: 3,
    unitPrice: 72,
    revision: '4',
    deliveryDay: '2',
  },
  {
    packageId: '3',
    jobPostID: 3,
    unitPrice: 102,
    revision: '7',
    deliveryDay: '1',
  },
  {
    packageId: '1',
    jobPostID: 4,
    unitPrice: 72,
    revision: '1',
    deliveryDay: '4',
  },
  {
    packageId: '2',
    jobPostID: 4,
    unitPrice: 72,
    revision: '4',
    deliveryDay: '2',
  },
  {
    packageId: '3',
    jobPostID: 4,
    unitPrice: 102,
    revision: '7',
    deliveryDay: '1',
  },
]

// Order
let payments=[
  {
    paymentID: 1,
    paymentName: 'banking',
  },
  {
    paymentID: 2,
    paymentName: 'momo',
  },
]
let historyOrders= [
  {
    orderID: 1,
    timeStart: '12-5-2023',
    timeStart: '17-5-2023',
    statusOrder: '....',
    paymentID: 1,
    PackageDetailID: 1,
  },
  {
    orderID: 2,
    timeStart: '12-5-2023',
    timeStart: '17-5-2023',
    statusOrder: '....',
    paymentID: 1,
    PackageDetailID: 1,
  },
]
let orders=[
  {
    orderID: 1,
    freelanceID: '1',
    custormerID: '2',
    jobPostID: 1,
    createTime: '12-5-2023',
    deliveryTime: 5,
    totailPrice: 52,
    status: 'Unfinished',
  },
  {
    orderID: 2,
    freelanceID: '1',
    custormerID: '2',
    jobPostID: 1,
    createTime: '12-5-2023',
    deliveryTime: 5,
    totailPrice: 52,
    status: 'Comleted',
  },
  {
    orderID: 3,
    freelanceID: '1',
    custormerID: '2',
    jobPostID: 1,
    createTime: '12-5-2023',
    deliveryTime: 5,
    totailPrice: 52,
    status: 'Unconfirmed',
  },
  {
    orderID: 4,
    freelanceID: '1',
    custormerID: '2',
    jobPostID: 1,
    createTime: '12-5-2023',
    deliveryTime: 5,
    totailPrice: 52,
    status: 'Unconfirmed',
  },
]

// chat
let chats = [
  {
    chatID: 1,
    senderId: '1',
    receiverId: '2',
  },
]
let messages=[
  {
    messageID: 1,
    chatID: 1,
    sender: '1',
    text: 'xin chào',
    isRead: true,
  },
  {
    messageID: 2,
    chatID: 1,
    sender: '2',
    text: 'Chào cậu, cậu nhắn tin cho tôi có việc gì?',
    isRead: true,
  },
  {
    messageID: 3,
    chatID: 1,
    sender: '1',
    text: 'Tôi muốn thuê bạn làm 1 dự án nho nhỏ',
    isRead: true,
  },
  {
    messageID: 4,
    chatID: 1,
    sender: '3',
    text: 'Dự án đấy như thế nào bạn có thể nói rỏi hơn không',
    isRead: true,
  },
  {
    messageID: 5,
    chatID: 1,
    sender: '3',
    text: 'Dự án đấy như thế nào bạn có thể nói rỏi hơn không',
    isRead: false,
  },
]


export {
  accounts, users, profileUsers, levels, categorys, categoryDetails, jobPosts,
  jobPostDetails, packages, packageDetails, payments, historyOrders,
  orders, chats, messages, 
}