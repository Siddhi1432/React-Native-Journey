import { Text,View, StyleSheet } from "react-native";

export default function App(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hi Siddhi</Text>
            <Text style={styles.subtitle}>Welcome to React Native</Text>
            <Text style={styles.text}>I am building my first app</Text>
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
        fontSize: 28,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        marginTop: 10
    },
    text: {
        fontSize: 16,
        marginTop: 5
    }
});