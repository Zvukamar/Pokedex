import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'

import Navigator from './src/navigation/Navigator';
import useTheme from './src/hooks/useTheme';
import usePermissions from './src/hooks/usePermissions';
import { store } from './src/redux/store';

const App = () => {
  const theme = useTheme();
  const style = createStyle(theme);
  usePermissions();

  return (
    <SafeAreaView style={style.container}>
      <StatusBar style='auto' />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const createStyle = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
