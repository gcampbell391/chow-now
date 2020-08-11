import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import React from 'react'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import { createAppContainer } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../constants/Colors'


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            title: `Food Dude`,
            headerLeft: <FontAwesome5 name={'hamburger'} brands size={25} color='white' style={{ marginLeft: 10 }} />
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor,
                height: 60
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontFamily: 'raleway-bold',
                fontSize: 15,
                textAlign: 'center'
            }
        }
    }
)

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabinfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabinfo.tintColor} />
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen, navigationOptions: {
            tabBarIcon: (tabinfo) => {
                return <Ionicons name='ios-star' size={25} color={tabinfo.tintColor} />
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'blueviolet'
    }
})

export default createAppContainer(MealsFavTabNavigator)
