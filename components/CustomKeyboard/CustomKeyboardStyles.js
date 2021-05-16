import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'grey',
    width: width,
    left: 0,
  },
  buttonLabel: {
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 14,
    borderRadius: 5,
    fontWeight: 'bold',
  },
  button: {
    width: width / 3,
    padding: 3,
  },
  doneButton: {
    padding: 10,
    textAlign: 'center',
    fontSize: 12,
    backgroundColor: 'blue',
    borderRadius: 5,
    color: 'white',
  },
  doneButtonText: {
    width: width / 3,
    padding: 3,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  iconLabel: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
