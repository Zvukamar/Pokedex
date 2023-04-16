import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'

import Navigator from './src/navigation/Navigator';
import { colors } from './src/utils';
import { store } from './src/redux/store';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
