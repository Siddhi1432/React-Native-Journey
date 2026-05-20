import { Alert, StyleSheet, View } from "react-native";
import CustomButton from "./components/CustomButton";
export default function App() {
  function handlePress() {
    Alert.alert("Success", "You pressed custom button");
  }

  return (
    <View style={styles.container}>
      <CustomButton title="Build My Future" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },

  item: {
    fontSize: 20,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
  },
});
