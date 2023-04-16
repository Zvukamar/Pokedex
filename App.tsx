import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import Navigator from './src/navigation/Navigator';
import { colors } from './src/utils';

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
