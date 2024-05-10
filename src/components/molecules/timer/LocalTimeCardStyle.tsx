import {StyleSheet} from 'react-native';
const colors = {
  primary: '#4d4d4d',
  secondary: '#666',
  accent: '#F7F7F7',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: colors.primary,
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
  },
  timeText: {
    fontSize: 16,
    color: colors.secondary,
  },
});

export default styles;
