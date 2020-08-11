import React from 'react'
import { View, Text, StyleSheet, ImageBackground, FlatList, ScrollView, Button } from 'react-native'
import Colors from '../constants/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MealDetailScreen = (props) => {

    const meal = props.navigation.getParam('meal')
    let counter = 1;
    const ingredientsIcon = <FontAwesome5 name={'utensils'} brands size={20} />;
    const directionsIcon = <FontAwesome5 name={'clipboard-list'} brands size={20} />;
    const veganIcon = <FontAwesome5 name={'seedling'} brands size={20} color={'#41d95d'} />;
    const vegetarianIcon = <FontAwesome5 name={'carrot'} brands size={20} color={'#f5a442'} />;
    const glutenIcon = <FontAwesome5 name={'bread-slice'} brands size={20} color={'#deb887'} />;
    const lactoseIcon = <FontAwesome5 name={'cheese'} brands size={20} color={'#f5d142'} />;
    const ingredientIcon = <FontAwesome5 name={'check-circle'} brands size={20} color={'#41d95d'} />;
    const favoriteIcon = <FontAwesome5 name={'heart'} brands size={20} color={'#ff6347'} />;




    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <ImageBackground source={{ uri: meal.imageUrl }} style={styles.bgImage}>
                </ImageBackground>
            </View>
            <ScrollView>
                <View style={styles.mealSpecs} elevation={5} >
                    {meal.isVegan && <View style={styles.mealSpec}><Text>{veganIcon} Vegan</Text></View>}
                    {meal.isVegetarian && <View style={styles.mealSpec}><Text>{vegetarianIcon} Vegetarian</Text></View>}
                    {meal.isGlutenFree && <View style={styles.mealSpec}><Text>{glutenIcon} Gluten Free</Text></View>}
                    {meal.isLactoseFree && <View style={styles.mealSpec}><Text>{lactoseIcon} Lactose Free</Text></View>}
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginHorizontal: 80,
                        marginBottom: 10
                    }}
                />
                <Text style={styles.ingredientsTitle}>{ingredientsIcon} Ingredients</Text>
                <View style={styles.ingredientsList}>
                    {meal.ingredients.map(ingredient => {
                        return <View style={styles.ingredientItem}><Text>{ingredientIcon} {ingredient}</Text></View>
                    })}
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginHorizontal: 80,
                        marginBottom: 10
                    }}
                />
                <Text style={styles.ingredientsTitle}>{directionsIcon} Directions</Text>
                <View style={styles.stepsList}>
                    {meal.steps.map(step => {
                        return <View style={styles.stepItem}><Text>{counter++}. {step}</Text></View>
                    })}
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginHorizontal: 80,
                        marginVertical: 10
                    }}
                />
                <View style={styles.favorite}>
                    <Text> {favoriteIcon} Add this recipe to your favorites?</Text>
                </View>
            </ScrollView>
        </View>
    )
}

// MealDetailScreen.navigationOptions = {
//     title: 'Details'
// }

//Sets the header title to the selected category
MealDetailScreen.navigationOptions = (navigationData) => {
    const meal = navigationData.navigation.getParam('meal')
    return {
        title: meal.title
    }
}

const styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%'
    },
    header: {
        height: 230
    },
    bgImage: {
        height: '100%',
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    title: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10
    },
    ingredientsTitle: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'raleway-bold'
    },
    ingredientItem: {
        marginVertical: 3
    },
    ingredientsList: {
        marginHorizontal: 50,
        marginBottom: 10
    },
    stepsList: {
        marginHorizontal: 50
    },
    stepItem: {
        marginVertical: 5
    },
    mealSpecs: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,

    },
    mealSpec: {
        marginHorizontal: 5,
        marginVertical: 5
    },
    favorite: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
})

export default MealDetailScreen