# React Native - Post message example

## Overview

This repo is intended to reproduce an issue when injecting Javascript and then processing the `onMessage` callback for the [React Native WebView](https://github.com/react-native-webview/react-native-webview) library.

For iOS, `onMessage` works ok. For Android, the callback doesn't get triggered.

## Examples

### iOS

![](https://github.com/fpena/react-native-webview-post-message-example/blob/main/ios.gif)

### Android

![](https://github.com/fpena/react-native-webview-post-message-example/blob/main/android.gif)
