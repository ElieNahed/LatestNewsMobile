import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';
import Header from '../../components/organisms/header/Header';
import Footer from '../../components/organisms/footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {getNews} from '../../store/news/newsSlice';
import {NewsItem} from '../../store/news/types';
import NewsList from '../../components/molecules/news/NewsList';
import NewsModal from '../../components/molecules/news/NewsModal';
import styles from './NewsScreenStyle';
const NewsScreen = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const news = useSelector((state: any) => state.news.news);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews({page, pageSize}));
  }, [page, pageSize, dispatch]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getNews({page: 1, pageSize})).then(() => {
      setRefreshing(false);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ImageBackground
        source={require('../../assets/newspagebg.jpg')}
        style={styles.imageBackground}>
        <NewsList
          onNewsSelect={item => setSelectedNews(item)}
          news={news}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </ImageBackground>
      <Footer />
      <NewsModal
        visible={!!selectedNews}
        onClose={() => setSelectedNews(null)}
        news={selectedNews}
      />
    </View>
  );
};

export default NewsScreen;
