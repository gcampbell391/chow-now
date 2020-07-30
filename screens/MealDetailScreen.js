import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

const MealDetailScreen = (props) => {

    return (
        <View style={styles.screen}>
            <Text>MealDetailScreen</Text>
        </View>
    )
}

MealDetailScreen.navigationOptions = {
    title: 'Details',
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen