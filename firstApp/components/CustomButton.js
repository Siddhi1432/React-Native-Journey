import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function CustomButton(props) {
  return(
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>
                {props.title}
            </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 10,
    width: 220,
    alignItems: "center",
  },

  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
