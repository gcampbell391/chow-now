import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const FiltersScreen = (props) => {

    //State to manage filters
    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegan, setIsVegan] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)

    //Icons
    const veganIcon = <FontAwesome5 name={'seedling'} brands size={20} color={'#41d95d'} />;
    const vegetarianIcon = <FontAwesome5 name={'carrot'} brands size={20} color={'#f5a442'} />;
    const glutenIcon = <FontAwesome5 name={'bread-slice'} brands size={20} color={'#deb887'} />;
    const lactoseIcon = <FontAwesome5 name={'cheese'} brands size={20} color={'#f5d142'} />;

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Current Filter Settings</Text>
            <View style={styles.filterContainer}>
                <Text style={styles.filterTitle}>{lactoseIcon} Lactose Free</Text>
                <Switch value={isLactoseFree} onValueChange={newValue => setIsLactoseFree(newValue)} trackColor={{ true: '#41d95d' }} />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterTitle}>{glutenIcon} Gluten Free</Text>
                <Switch value={isGlutenFree} onValueChange={newValue => setIsGlutenFree(newValue)} trackColor={{ true: '#41d95d' }} />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterTitle}>{vegetarianIcon} Vegetarian</Text>
                <Switch value={isVegetarian} onValueChange={newValue => setIsVegetarian(newValue)} trackColor={{ true: '#41d95d' }} />
            </View>
            <View style={styles.filterContainer}>
                <Text style={styles.filterTitle}>{veganIcon} Vegan</Text>
                <Switch value={isGlutenFree} onValueChange={newValue => setIsGlutenFree(newValue)} trackColor={{ true: '#41d95d' }} />
            </View>
        </View>
    )
}

FiltersScreen.navigationOptions = (navData) => {
    return {
        title: `Food Dude Filters`,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='menu' iconName='ios-menu' onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerLeft: () => <FontAwesome5 name={'hamburger'} brands size={25} color='white' style={{ marginLeft: 10 }} />
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    title: {
        textAlign: "center",
        fontFamily: 'raleway-bold',
        fontSize: 25,
        marginVertical: 30
    },
    filterTitle: {
        fontSize: 18
    }
})

export default FiltersScreen