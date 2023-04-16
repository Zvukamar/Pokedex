import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import PokemonList from './src/components/PokemonList';
import { colors } from './src/utils';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />
      <PokemonList />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
});
