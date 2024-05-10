// import React from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import {SwiperFlatList} from 'react-native-swiper-flatlist';
// import {NewsItem} from '../../../store/news/types';

// const SwipableNews = ({
//   topCategoryNews,
//   setSelectedNews,
// }: {
//   topCategoryNews: {category: string; news: NewsItem[]} | null;
//   setSelectedNews: (item: NewsItem) => void;
// }) => {
//   if (!topCategoryNews) return null;

//   return (
//     <View style={styles.topCategoryContainer}>
//       <SwiperFlatList
//         data={topCategoryNews.news}
//         renderItem={({item, index}: {item: NewsItem; index: number}) => (
//           <TouchableOpacity
//             style={styles.topCategoryItem}
//             onPress={() => setSelectedNews(item)}>
//             <Image
//               source={{uri: item.image_url}}
//               style={[
//                 styles.topCategoryImage,
//                 index === 0 && {width: 500, height: 300},
//               ]}
//               resizeMode="cover"
//             />
//             {/* <Text style={styles.topCategoryTitle}>{item.title}</Text> */}
//           </TouchableOpacity>
//         )}
//         index={0}
//         showPagination
//         paginationActiveColor={'#007AFF'}
//         paginationStyleItem={{width: 10, height: 10}}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   topCategoryContainer: {
//     height: '40%',
//   },
//   topCategoryItem: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   topCategoryImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 10,
//     marginBottom: 5,
//   },
//   topCategoryTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default SwipableNews;
