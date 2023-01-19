import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store';



// Set up Redux


export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <HomeScreen/>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
