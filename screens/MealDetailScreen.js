import React from 'react'
import { View, Text, StyleSheet, ImageBackground, FlatList, ScrollView } from 'react-native'
import Colors from '../constants/Colors'

const MealDetailScreen = (props) => {

    const meal = props.navigation.getParam('meal')
    let counter = 1;

    const renderInstructions = (itemData) => {
        return (
            <View>
                <Text>{counter++}. {itemData.item}</Text>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <ImageBackground source={{ uri: meal.imageUrl }} style={styles.bgImage}>
                </ImageBackground>
            </View>
            <Text style={styles.title} numberOfLines={1}>{meal.title}</Text>
            <ScrollView>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsList}>
                    {meal.ingredients.map(ingredient => {
                        return <View style={styles.ingredientItem}><Text>{ingredient}</Text></View>
                    })}
                </View>
                <Text style={styles.ingredientsTitle}>Directions</Text>
                <View style={styles.stepsList}>
                    {meal.steps.map(step => {
                        return <View style={styles.stepItem}><Text>{counter++}. {step}</Text></View>
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

MealDetailScreen.navigationOptions = {
    title: 'Details'
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
        width: '100%'
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
        marginBottom: 10
    },
    ingredientItem: {
        marginVertical: 3
    },
    ingredientsList: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    stepsList: {
        marginHorizontal: 10
    },
    stepItem: {
        marginVertical: 5
    }
})

export default MealDetailScreen