import { StatusBar } from 'expo-status-bar';
import React , { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView , FlatList } from 'react-native';



export default function App() {
  const [ enteredGoal, setEnteredGoal] = useState('');
  const [ courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal}]);
   // setCourseGoals([...courseGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course goal" style={styles.input} onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList 
      keyExtractor={(item, index) => item.id }
        data={courseGoals}
        renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
          </View>
        
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
   flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{ 
    width: '80%', 
    height: 40, 
    borderColor: 'black', 
    borderWidth: 1
  },
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});
