/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import configureStore from './src/redux/configureStore';
import MainApp from './src';

const store = configureStore();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App: () => React$Node = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <MainApp />
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
