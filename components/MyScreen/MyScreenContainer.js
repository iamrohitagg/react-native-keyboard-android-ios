import React, {createRef, useState} from 'react';
import MyScreen from './MyScreen';
import {NativeModules, Dimensions} from 'react-native';

class MyScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstInputValue: '0.00',
      secondInputValue: '0.00',
      thirdInputValue: '0.00',
      forthInputValue: '0.00',
      fifthInputValue: '0.00',
      sixthInputValue: '0.00',
      seventhInputValue: '0.00',
      eightInputValue: '0.00',
      nineInputValue: '0.00',
      isKeyboardActive: false,
      focusedElementName: '',
    };
    this.firstInputValueRef = createRef();
    this.secondInputValueRef = createRef();
    this.thirdInputValueRef = createRef();
    this.forthInputValueRef = createRef();
    this.fifthInputValueRef = createRef();
    this.sixthInputValueRef = createRef();
    this.seventhInputValueRef = createRef();
    this.eightInputValueRef = createRef();
    this.nineInputValueRef = createRef();
    this.scrollViewRef = createRef();
  }

  onFocus = focusedElementName => {
    this.hideSystemKeyboard();
    this.setState(
      {
        currentTextInputRef: this[`${focusedElementName}Ref`],
        isKeyboardActive: true,
        focusedElementName: focusedElementName,
      },
      () => this.scrollToCurrentInput(this[`${focusedElementName}Ref`]),
    );
  };

  hideSystemKeyboard = () => {
    if (Platform.OS === 'android') {
      NativeModules.KeyboardFunctionalities.hideKeyboard();
    } else {
      return;
    }
  };

  scrollToCurrentInput = inputRef => {
    // 238 is height of keyboard(approx)
    // 376 is height of scrollview container(approx)

    if (inputRef) {
      inputRef.current.measureLayout(this.scrollViewRef.current, (x, y) => {
        console.log(y);
        if (y + 238 < 376) {
          return;
        } else {
          const {height} = Dimensions.get('screen');
          const keyboardScreenY = 238;
          let scrollOffsetY = y - keyboardScreenY + (height * 11) / 100;
          this.scrollViewRef.current.scrollTo({
            x: 0,
            animated: true,
            y: scrollOffsetY,
          });
        }
      });
    }
  };
  onTextChange = (elementName, value) => {
    this.setState({
      [elementName]: value,
    });
  };

  render() {
    const elementsName = [
      {elementName: 'firstInputValue', reference: this.firstInputValueRef},
      {elementName: 'secondInputValue', reference: this.secondInputValueRef},
      {elementName: 'thirdInputValue', reference: this.thirdInputValueRef},
      {elementName: 'forthInputValue', reference: this.forthInputValueRef},
      {elementName: 'fifthInputValue', reference: this.fifthInputValueRef},
      {elementName: 'sixthInputValue', reference: this.sixthInputValueRef},
      {elementName: 'seventhInputValue', reference: this.seventhInputValueRef},
      {elementName: 'eightInputValue', reference: this.eightInputValueRef},
      {elementName: 'nineInputValue', reference: this.nineInputValueRef},
    ];
    const {isKeyboardActive, focusedElementName, currentTextInputRef} =
      this.state;
    return (
      <MyScreen
        onTextChange={this.onTextChange}
        state={this.state}
        onFocus={this.onFocus}
        isKeyboardActive={isKeyboardActive}
        focusedElementName={focusedElementName}
        currentTextInputRef={currentTextInputRef}
        elementsName={elementsName}
        scrollViewRef={this.scrollViewRef}
      />
    );
  }
}

export default MyScreenContainer;
