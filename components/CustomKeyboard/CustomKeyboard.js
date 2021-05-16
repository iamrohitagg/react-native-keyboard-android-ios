import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './CustomKeyboardStyles';

const CustomKeyboard = ({
  isKeyboardActive,
  value,
  onStateChange,
  currentTextInputRef,
  elementName,
}) => {
  function onBackPress(val) {
    return onStateChange(elementName, val.slice(0, -1));
  }

  function onNextPress() {
    onStateChange('isKeyboardActive', false);
    currentTextInputRef.current.blur();
  }
  console.log(elementName, 'element');
  function numberKeyView(buttonValue) {
    return (
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => onStateChange(elementName, value + buttonValue)}>
          <Text style={styles.buttonLabel}>{buttonValue}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function onButtonPress(val) {
    onStateChange(elementName, value + val);
  }

  return (
    <>
      {isKeyboardActive && (
        <View style={styles.container}>
          <View style={styles.flexDirectionRow}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('-')}>
              <Text style={styles.buttonLabel}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onButtonPress('000')}>
              <Text style={styles.buttonLabel}>000</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.doneButtonText}
              onPress={() => onNextPress()}>
              <Text style={styles.doneButton}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.flexDirectionRow}>
            {['1', '2', '3'].map(buttonValue => numberKeyView(buttonValue))}
          </View>
          <View style={styles.flexDirectionRow}>
            {['4', '5', '6'].map(buttonValue => numberKeyView(buttonValue))}
          </View>
          <View style={styles.flexDirectionRow}>
            {['7', '8', '9'].map(buttonValue => numberKeyView(buttonValue))}
          </View>
          <View style={styles.flexDirectionRow}>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => onButtonPress('.')}>
                <Text style={styles.buttonLabel}>.</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => onButtonPress('0')}>
                <Text style={styles.buttonLabel}>0</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => onBackPress(value)}>
                <Icon
                  containerStyle={styles.iconLabel}
                  name="ios-backspace"
                  type="ionicon"
                  color={'grey'}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default CustomKeyboard;
