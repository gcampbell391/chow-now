import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import Colors from '../constants/Colors'

import { CATEGORIES, MEALS } from '../data/category-data'
import MealItem from '../components/MealItem'


const CategoryMealsScreen = (props) => {

    const catID = props.navigation.getParam('categoryId')

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catID) >= 0)

    const renderMealItem = itemData => {
        return <MealItem meal={itemData.item} onSelectMeal={() => {

        }} />
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '95%' }}
            />
        </View>
    )
}

//Sets the header title to the selected category
CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID)
    return {
        title: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default CategoryMealsScreen