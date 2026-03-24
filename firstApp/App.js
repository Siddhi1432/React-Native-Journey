import { Text,View, StyleSheet, Button, Alert } from "react-native";

export default function App(){
    const handlePress = () => {
        Alert.alert("Hello Siddhi ","You clicked the button!")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>My First Interactive App</Text>
            
            <Button title="Click Me" onPress={handlePress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
});