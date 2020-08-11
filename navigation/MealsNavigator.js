import { createStackNavigator } from 'react-navigation-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { createAppContainer } from 'react-navigation'
import Colors from '../constants/Colors'


const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            title: 'Food Dude'
        }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetails: MealDetailScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor,
                height: 100
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontFamily: 'raleway-bold',
                fontSize: 35,
                textAlign: 'center'
            }
        }
    }
)

export default createAppContainer(MealsNavigator)
