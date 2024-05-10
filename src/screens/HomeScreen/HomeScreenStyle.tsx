import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appDownloadBanner: {
    height: 40,
    backgroundColor: '#66b2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appDownloadText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  homePageBackground: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
  },
  fullWidth: {
    flex: 1,
  },

  topSection: {
    paddingTop: 50,
  },
  topSectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  topSectionTitleHighlight: {
    color: '#66b2ff',
  },
  bottomSection: {
    marginTop: 30,
  },
  bottomSectionText: {
    fontSize: 16,
    color: '#4d4d4d',
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: '#66b2ff',
    borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedButtonText: {
    color: '#fff',
    marginRight: 10,
  },
  loginContainer: {
    flex: 1,
    marginTop: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
export default styles;
