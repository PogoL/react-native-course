import React, { useState } from 'react'
import { StyleSheet, View, Button, TextInput, Modal, FlexBox } from "react-native";

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    placeholder="Course Goal" style={styles.input}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        width: '80%'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        padding: 10
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;

