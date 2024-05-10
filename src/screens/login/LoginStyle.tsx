import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3a4d57',
    width: '80%',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  signupText: {
    fontWeight: 'normal',
    marginRight: 5,
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#5faad2',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
export default styles;
