import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CATEGORIES } from '../data/category-data'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

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

//Navigation options for the Categories screen
CategoriesScreen.navigationOptions = (navData) => {
    return {
        title: `Food Dude`,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerLeft: () => <FontAwesome5 name={'hamburger'} brands size={25} color='white' style={{ marginLeft: 10 }} />
    }
}

//Stylesheet
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen