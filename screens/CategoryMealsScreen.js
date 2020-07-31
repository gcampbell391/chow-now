import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Colors from '../constants/Colors'

import { CATEGORIES } from '../data/category-data'


const CategoryMealsScreen = (props) => {
    const catID = props.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID)


    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen</Text>
            <Button title='Go to Meal' onPress={() => {
                props.navigation.navigate('MealDetails')
            }} />
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
        alignItems: 'center'
    }
})

export default CategoryMealsScreen