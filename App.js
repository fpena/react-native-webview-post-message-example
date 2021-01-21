/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Alert, Button} from 'react-native';
import {WebView} from 'react-native-webview';

const App: () => React$Node = () => {
  const injectedJS = 'function callback(){ReactNativeWebView.postMessage({});}';
  const onMessage = () => {
    createAlert();
  };
  const createAlert = () =>
    Alert.alert('Hey', 'Message posted', [{text: 'OK', onPress: () => {}}], {
      cancelable: false,
    });

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{flex: 1}}>
        <WebView
          onMessage={onMessage}
          injectedJavaScript={injectedJS}
          source={{uri: 'https://rmjme.csb.app'}}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
