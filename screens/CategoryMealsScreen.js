import React from 'react'
import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import { useSelector } from 'react-redux'
import { CATEGORIES } from '../data/category-data'
import MealList from '../components/MealList'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const CategoryMealsScreen = (props) => {

    const catID = props.navigation.getParam('categoryId')
    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catID) >= 0)

    if (displayedMeals.length === 0 || !displayedMeals) {
        return (
            <View style={styles.noMealsView}>
                <Image source={require('../assets/images/foodDude3.png')} style={styles.image} />
                <Text style={{ fontFamily: 'raleway-bold', fontSize: 20 }}>No Food Dude Foods Found Here! </Text>
                <FontAwesome5 name={'drumstick-bite'} brands size={50} color='burlywood' style={{ marginTop: 10 }} />
                <Text style={{ fontFamily: 'raleway-bold', fontSize: 16, marginTop: 10 }}>Check your filters if you need to </Text>

            </View>)
    }

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


const styles = StyleSheet.create({
    noMealsView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        height: 280,
        marginTop: Platform.OS === 'android' ? -20 : -20,
        marginBottom: 50
    }
})

export default CategoryMealsScreen