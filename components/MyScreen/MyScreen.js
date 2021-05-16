import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import CustomKeyboard from '../CustomKeyboard/CustomKeyboard';

const MyScreen = ({
  focusedElementName,
  isKeyboardActive,
  onTextChange,
  state,
  onFocus,
  currentTextInputRef,
  elementsName,
  scrollViewRef,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}></View>
      <View style={styles.scrollViewContainer}>
        <ScrollView ref={scrollViewRef}>
          {elementsName.map(({elementName, reference}) => (
            <View style={styles.rowContainer}>
              <Text>{elementName}</Text>
              <View style={styles.rowContainer}>
                <Text>$</Text>
                <TextInput
                  ref={reference}
                  value={state[elementName]}
                  onChangeText={value => onTextChange(elementName, value)}
                  placeholder={'0.00'}
                  onFocus={() => onFocus(elementName)}
                  showSoftInputOnFocus={false}
                  style={styles.textInput}
                />
              </View>
            </View>
          ))}
          <View style={styles.emptyView}></View>
        </ScrollView>
      </View>
      {isKeyboardActive && (
        <CustomKeyboard
          isKeyboardActive={isKeyboardActive}
          value={state[focusedElementName]}
          currentTextInputRef={currentTextInputRef}
          onStateChange={onTextChange}
          elementName={focusedElementName}
        />
      )}
    </View>
  );
};

export default MyScreen;
