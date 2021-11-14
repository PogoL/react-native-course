import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoryMealsScreen (props:any) {

    //destructure
    const { categoryId, categoryTitle } = props.route.params;

    return (
        <View style={styles.screen}>
            <Text>The CategoryMeals Screen!</Text>
            <Text>{categoryId}</Text>
            <Text>{categoryTitle}</Text>
            <Button title="Go to Meal Detail" onPress={() => {
                props.navigation.navigate('MealDetail');
            }}/>
            <Button title="Go Back" onPress={() => {props.navigation.goBack()}}/>
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData: any) => {
    return {
        headerTitle: navigationData.route.params.categoryTitle
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});