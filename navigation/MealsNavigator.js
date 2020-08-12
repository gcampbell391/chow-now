import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import HeaderButton from '../components/HeaderButton'

import { Ionicons } from '@expo/vector-icons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors'

//Default Stack Options for all tabs
const defaultStackOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
        height: 60
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontFamily: 'raleway-bold',
        fontSize: 16,
        textAlign: 'center',
    },
    headerBackTitleStyle: {
        fontFamily: 'raleway-bold',
        fontSize: 12,
    }
}

//Stack Navigation for the Meals tab
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailScreen
},
    {
        defaultNavigationOptions: defaultStackOptions
    }
)

//Stack Navigation for the Favorites tab
const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailScreen
},
    {
        defaultNavigationOptions: defaultStackOptions
    }
)

//Default Tab config options for both android and ios platforms
const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabinfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabinfo.tintColor} />
            },
            tabBarColor: 'black'
        }
    },
    Favorites: {
        screen: FavoritesNavigator, navigationOptions: {
            tabBarIcon: (tabinfo) => {
                return <Ionicons name='ios-star' size={25} color={tabinfo.tintColor} />
            },
            tabBarColor: '#f54242'
        }
    }
}

//Creates bottom tab specifically for both android and ios platforms
const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: 'black',
        activeColor: 'white',
        shifting: true
    })
    :
    createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: '#f54242',
            labelStyle: {
                fontSize: 13,
                fontFamily: 'raleway-bold'
            }
        }
    })


const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        drawerLabel: 'Filters'
    },
    defaultNavigationOptions: defaultStackOptions
}
)

const MainNavigator = createDrawerNavigator({
    MealFavs: {
        screen: MealsFavTabNavigator, navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: '#f54242',
        fontFamily: 'raleway-bold',
    }
})

export default createAppContainer(MainNavigator)
