import { MEALS } from '../../data/category-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals'


const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}



const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            //If this returns -1, item doesnt exist in array..anything 0+ means the item does exist in the array
            const exisitingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (exisitingIndex >= 0) {
                //creates copy of fav meals current state and removes exisiting item from array
                const updatedFavMeals = [...state.favoriteMeals]
                updatedFavMeals.splice(exisitingIndex, 1)
                return { ...state, favoriteMeals: updatedFavMeals }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId)
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                return true;
            })
            return { ...state, filteredMeals: updatedFilteredMeals }
        default:
            return state
    }
    return state
}

export default mealsReducer