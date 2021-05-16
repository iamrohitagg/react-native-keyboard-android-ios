import {Dimensions, StyleSheet} from 'react-native';
// import colors from '../../../Themes/Colors';
// import Fonts from '../../../Themes/Fonts';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    height: (height * 30) / 100,
    backgroundColor: '#ADD8E6',
  },
  scrollViewContainer: {
    flex: 1,
  },
  emptyView: {
    height: 200,
  },
  textInput: {
    width: '44%',
    height: (height * 5) / 100,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 10,
    paddingLeft: 10,
    fontSize: 14,
    padding: 0,
  },
  // googleAutocompleteTextInputContainer: {
  //   backgroundColor: colors.grey,
  //   marginRight: 7,
  //   marginLeft: 2,
  // },
  // googleAutocompleteTextInput: {
  //   height: (height * 5) / 100,
  //   borderRadius: 4,
  //   backgroundColor: colors.snow,
  // },
  // googleAutocompleteListView: {
  //   backgroundColor: colors.lightGrey,
  //   height: (height * 30) / 100,
  //   zIndex: 999,
  //   elevation: 999,
  //   position: 'absolute',
  //   top: '80%',
  //   left: 10,
  //   right: 14,
  // },
  // midSectionFooter: {
  //   height: (height * 6) / 100,
  //   backgroundColor: colors.black,
  //   paddingVertical: 3,
  // },
  rowContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: (height * 7.5) / 100,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  // tabs: {
  //   flexDirection: 'row',
  //   width,
  //   height: (height * 5) / 100,
  //   borderTopWidth: 1,
  //   borderTopColor: colors.lightGrey,
  // },
  // tab: {
  //   width: width / 6,
  //   backgroundColor: colors.grey,
  //   borderRightColor: colors.lightGrey,
  //   borderRightWidth: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // tabLabel: {
  //   color: colors.lightGrey,
  //   fontWeight: 'bold',
  //   fontSize: Fonts.size.regular,
  // },
  // activeTab: {
  //   backgroundColor: colors.black,
  //   fontSize: Fonts.size.regular,
  // },
  // activeTabLabel: {
  //   color: colors.snow,
  // },
  // ocContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 10,
  // },
  // innerOc: {
  //   flexDirection: 'column',
  // },
  // addressTextInput: {
  //   width: '93.3%',
  //   marginVertical: 7,
  // },
  // keyboardExtension: {
  //   position: 'absolute',
  //   bottom: 0,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   width: width,
  //   height: 50,
  //   backgroundColor: colors.greyShade2,
  // },
  // key: {
  //   backgroundColor: colors.snow,
  //   width: width / 3.2,
  //   marginTop: 5,
  //   borderRadius: 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // keyText: {
  //   fontWeight: '500',
  //   fontSize: 18,
  // },
  // keyboardExtensionAndroid: {
  //   position: 'absolute',
  //   bottom: 28,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   width: width,
  //   height: 50,
  //   backgroundColor: colors.greyShade3,
  //   marginBottom: -5,
  // },
  // keyAndroid: {
  //   width: width / 4,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // keyTextAndroid: {
  //   fontWeight: '600',
  //   fontSize: 22,
  // },
});
