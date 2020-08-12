import React from 'react'
import { CATEGORIES, MEALS } from '../data/category-data'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const CategoryMealsScreen = (props) => {

    const catID = props.navigation.getParam('categoryId')
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catID) >= 0)

    return (
        <MealList meals={displayedMeals} navigation={props.navigation} />
    )
}

//Sets the header title to the selected category
CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID)
    return {
        title: selectedCategory.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='menu' iconName='ios-menu' onPress={() => {
                navigationData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
    }
}


export default CategoryMealsScreen