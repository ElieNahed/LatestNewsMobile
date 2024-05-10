import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  newsItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    flex: 2,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sourceIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  source: {
    fontSize: 16,
    color: '#555',
  },
});
export default styles;
