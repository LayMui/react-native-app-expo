import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
      
    const [ enteredGoal, setEnteredGoal] = useState('');
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course goal" style={styles.input} onChangeText={goalInputHandler}
        value={enteredGoal}/>
        <Button title="ADD" onPress={props.onAddGoal.bind(this,enteredGoal)}/>
      </View>
    );
};

const styles = StyleSheet.create({
    input:{ 
        width: '80%', 
        height: 40, 
        borderColor: 'black', 
        borderWidth: 1
      },
});

export default GoalInput;