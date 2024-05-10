import React from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NewsItem} from '../../../store/news/types';
import styles from './NewsListStyle';
interface Props {
  news: NewsItem[];
  refreshing: boolean;
  onRefresh: () => void;
  onNewsSelect: (item: NewsItem) => void;
}

const NewsList: React.FC<Props> = ({
  news,
  refreshing,
  onRefresh,
  onNewsSelect,
}) => {
  const renderItem = ({item}: {item: NewsItem}) => (
    <TouchableOpacity onPress={() => onNewsSelect(item)}>
      <View style={styles.newsItem}>
        <View style={styles.imageContainer}>
          {item.image_url && (
            <Image source={{uri: item.image_url}} style={styles.image} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.sourceContainer}>
            {item.source_icon && (
              <Image
                source={{uri: item.source_icon}}
                style={styles.sourceIcon}
              />
            )}
            <Text style={styles.source}>{item.source_id}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={news}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default NewsList;
