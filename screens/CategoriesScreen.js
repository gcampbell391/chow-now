import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native'

import { CATEGORIES } from '../data/category-data'
import Colors from '../constants/Colors'

const CategoriesScreen = (props) => {

    //Renders a single category item
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals', params: {
                        categoryId: itemData.item.id
                    }
                })
            }}>
                <View>
                    <Text>
                        {itemData.item.title}
                    </Text>
                </View>
            </TouchableOpacity>
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

//Styles the navigation heaer
CategoriesScreen.navigationOptions = {
    title: 'Chow Now',
    headerStyle: {
        backgroundColor: Colors.primaryColor,
        height: 100
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'raleway-bold',
        fontSize: 55,
        textAlign: 'center'
    }
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
        height: 250,
    }
})

export default CategoriesScreen