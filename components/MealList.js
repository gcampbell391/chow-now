import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'

const MealList = (props) => {

    //Renders a single meal card
    const renderMealItem = itemData => {
        return <MealItem meal={itemData.item} onSelectMeal={() => {
            props.navigation.navigate({
                routeName: 'MealDetails', params: {
                    meal: itemData.item
                }
            })
        }} />
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.meals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '95%' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default MealList