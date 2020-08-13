import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FavoritesScreen = (props) => {

    const favortieMeals = useSelector(state => state.meals.favoriteMeals)

    if (favortieMeals.length === 0 || !favortieMeals) {
        return (
            <View style={styles.noFavMealsView}>
                <Text style={{ fontFamily: 'raleway-bold', fontSize: 20 }}>No Food Dude Favs Added yet! </Text><FontAwesome5 name={'sad-tear'} brands size={50} color='black' style={{ marginTop: 10 }} />
            </View>
        )
    }

    return (
        <MealList meals={favortieMeals} navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        title: `Food Dude Favs`,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerLeft: () => <FontAwesome5 name={'hamburger'} brands size={25} color='white' style={{ marginLeft: 10 }} />
    }
}

const styles = StyleSheet.create({
    noFavMealsView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})


export default FavoritesScreen