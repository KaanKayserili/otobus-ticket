import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                <Ionicons name={"arrow-back-outline"} size={28} style={{ marginLeft: 12.5, marginRight: 5 }} />
            </TouchableOpacity>

            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
    },
})