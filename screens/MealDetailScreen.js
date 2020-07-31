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
    title: 'Details'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailScreen