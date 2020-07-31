import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'

import { CATEGORIES } from '../data/category-data'
import Colors from '../constants/Colors'
import CategoryTile from '../components/CategoryTile'

const CategoriesScreen = (props) => {

    //Renders a single category item
    const renderGridItem = (itemData) => {
        return (
            <CategoryTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', params: {
                            categoryId: itemData.item.id
                        }
                    })
                }} />
        )
    }


    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItem} />
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen