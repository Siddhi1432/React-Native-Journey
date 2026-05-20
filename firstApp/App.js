import { View, StyleSheet, FlatList, Text } from 'react-native';
import Greeting from './components/Greetings';
export default function App() {
  const friends = [
    {id:'1',name:'Siddhi'},
    {id:'2',name:'Rahul'},
    {id:'3',name:'Neha'},
    {id:'4',name:'Aarav'},
    {id:'5',name:'Priya'},
    {id:'6',name:'Sandesh'},
    {id:'7',name:'Riya'},
    {id:'8',name:'Pooja'},
  ];
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>My Friends List</Text>

      <FlatList data={friends}
      renderItem={({item}) => (
        <Text style={styles.item}>{item.name}</Text>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 60,
    paddingHorizontal: 20
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:20
  },

  item:{
    fontSize:20,
    padding:15,
    marginBottom:10,
    borderWidth:1
  }
});