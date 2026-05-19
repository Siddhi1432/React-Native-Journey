import { View, StyleSheet } from 'react-native';
import Greeting from './components/Greetings';
export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name="Siddhi" />
      <Greeting name="React Native" />
      <Greeting name="Future Full Stack Developer" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});