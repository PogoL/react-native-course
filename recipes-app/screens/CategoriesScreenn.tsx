import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from "react-native";
import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen(props:any) {
    const renderGridItem = (itemData: any) => {
        return(
            <TouchableOpacity style={styles.gridItem}
                onPress={() => {
                props.navigation.navigate('CategoryMeals', {
                    categoryId: itemData.item.id,
                    categoryTitle: itemData.item.title
                });
            }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
            );
    }

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
        // <View style={styles.screen}>
        //     <Text>The Categories Screen!</Text>
        //     <Button title="Go to Category Meals" onPress={() => {
        //         props.navigation.navigate('CategoryMeals');
        //     }}/>
        // </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});