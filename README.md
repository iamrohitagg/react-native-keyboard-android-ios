## React Native Custom Keyboard

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

React Native Custom Keyboard is custom cross-platform keyboard.</br> The [showSoftInputOnFocus](https://reactnative.dev/docs/textinput#showsoftinputonfocus) prop for `TextInput` works well for iOS but has drawbacks in Android. The keyboard is visible if we move back to `TextInput` with `showSoftInputOnFocus` set to `false`.</br> Also if we use [Keyboard](https://reactnative.dev/docs/keyboard) API and call `Keyboard.dismiss()` on `onFocus` of the `TextInput` it blurs the focused input.</br>To avoid this. we can use [InputMethodManager](https://developer.android.com/reference/android/view/inputmethod/InputMethodManager) API provided by Android and use `hideSoftInputFromWindow` method for our use.
We're using below function to hide keyboard for Android

```
public void hideKeyboard() {
        final Activity activity = getCurrentActivity();
        InputMethodManager imm = (InputMethodManager) activity.getSystemService(Activity.INPUT_METHOD_SERVICE);
        View view = activity.getCurrentFocus();
        if (view == null) {
            view = new View(activity);
        }
        imm.hideSoftInputFromWindow(view.getWindowToken(), 0);
    }
```

We then use [NativeModules](https://reactnative.dev/docs/native-modules-android) to invoke this method.
