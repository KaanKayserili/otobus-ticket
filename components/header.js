import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.titleContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {props.title !== "Bilet Arama" ?
                    < TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Ionicons name={"arrow-back-outline"} size={28} style={{ marginRight: 5 }} />
                    </TouchableOpacity> : null}

                <Text style={styles.title}>{props.title}</Text>
            </View>
            {
                props.title === "Bilet Arama" ?
                    <TouchableOpacity onPress={() => { alert("Başarıyla Çıkış Yapıldı", "Bilgilendirme"); props.navigation.goBack() }}>
                        <Ionicons name={"log-out-outline"} size={28} style={{ marginLeft: 12.5, marginRight: 5 }} />
                    </TouchableOpacity> : null
            }
        </View >
    )
}

export default Header

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "3%",
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
    },
})