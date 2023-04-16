import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import { colors } from './src/utils';
import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <Navigator />
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
