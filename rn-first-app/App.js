import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from "./components/GoalItem";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  }

  const deleteGoalHandler = goalId => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput onAddGoal={addGoalHandler}
        visible={isAddMode}
        onCancel={cancelAddGoalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem onDelete={deleteGoalHandler} id={itemData.item.id} title={itemData.item.value} />
        } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
