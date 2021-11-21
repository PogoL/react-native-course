import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export default function CategoryMealsScreen (props:any) {
    const renderMealItem = (itemData:any) => {
        return (
            <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate('MealDetail')
            }}
            />
        );
    }
    //destructure
    const { categoryId, categoryTitle } = props.route.params;

    const displayedMeals = MEALS.filter(m => m.categoryIds.indexOf(categoryId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem}/>
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