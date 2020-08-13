import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Platform } from 'react-native'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FavoritesScreen = (props) => {

    const favortieMeals = useSelector(state => state.meals.favoriteMeals)

    if (favortieMeals.length === 0 || !favortieMeals) {
        return (
            <ImageBackground source={require('../assets/images/foodDude2.png')} style={styles.image} >
                <Text style={styles.message}>No Food Dude Favs Added yet! </Text>
            </ImageBackground>
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
        backgroundColor: 'white'
    },
    image: {
        height: '100%',
        resizeMode: "cover",
        justifyContent: "center"
    },
    message: {
        fontFamily: 'raleway-bold',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        padding: 10
    }
})


export default FavoritesScreen