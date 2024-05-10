import React from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Linking} from 'react-native';
import {NewsItem} from '../../../store/news/types';
import styles from './NewsModalStyle';
interface Props {
  visible: boolean;
  onClose: () => void;
  news: NewsItem | null;
}

const NewsModal: React.FC<Props> = ({visible, onClose, news}) => {
  if (!visible || !news) return null;

  // Remove weird characters from the description if it exists
  const cleanDescription = news.description
    ? news.description
        .replace(/nbsp;/g, '')
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
    : '';

  const handleReadMore = () => {
    if (news && news.source_url) {
      Linking.openURL(news.source_url);
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>{news.title}</Text>
              {news.image_url && (
                <Image
                  source={{uri: news.image_url}}
                  style={styles.modalImage}
                />
              )}
              <Text style={styles.modalDescription}>{cleanDescription}</Text>
              <TouchableOpacity onPress={handleReadMore}>
                <Text style={styles.postNewsButton}>Read More</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default NewsModal;
