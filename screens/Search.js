import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import Header from '../components/header'

const Search = ({ navigation }) => {

    const [checked, setChecked] = useState('going');

    return (
        <View style={styles.container}>
            <Header title={"Bilet Arama"} navigation={navigation} />

            <View style={styles.radioButtonContainer}>
                <View style={styles.chooseWay}>
                    <Text style={styles.text}>Gidiş</Text>
                    <RadioButton value='going' status={checked === 'going' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('going')} color='#ff6102' />
                </View>

                <View style={styles.chooseWay}>
                    <Text style={styles.text}>Gidiş-Dönüş</Text>
                    <RadioButton value='round-trip' status={checked === 'round-trip' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('round-trip')} color='#ff6102' />
                </View>
            </View>

            <View style={styles.goContainer}>
                <View style={styles.chooseWhere}>
                    <Text style={styles.text}>Nereden</Text>
                    <TextInput style={styles.inputWhere} />
                </View>

                <View style={styles.chooseWhere}>
                    <TextInput style={styles.inputWhere} />
                    <Text style={styles.text}>Nereye</Text>
                </View>
            </View>

            <View style={styles.dateContainer}>
                <View style={styles.goDateContainer}>
                    <Text style={styles.text}>Gidiş Tarihi</Text>
                    <TextInput style={styles.input} />
                </View>

                <View style={styles.goDateContainer}>
                    <Text style={styles.text}>Dönüş Tarihi</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Listing") }}>
                <Text style={styles.buttonText}>Ara</Text>
                <Ionicons name={"search"} size={20} color={"white"} />
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 28,
    },
    radioButtonContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        width: "100%",
        marginVertical: "5%",
    },
    chooseWay: {
        flexDirection: "row",
        alignItems: "center",
    },
    goContainer: {
        alignItems: "center",
        marginVertical: "5%",
    },
    chooseWhere: {
        flexDirection: "row",
        marginBottom: "5%",
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
    },
    inputWhere: {
        backgroundColor: "lightgray",
        borderRadius: 100,
        width: "50%",
        marginHorizontal: 5,
        paddingHorizontal: 10,
        fontSize: 18,
    },
    dateContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "10%",
    },
    goDateContainer: {
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
    },
    chooseDate: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        width: "80%",
        backgroundColor: "lightgray",
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    button: {
        marginLeft: "30%",
        width: "40%",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#FF6102",
        paddingVertical: 5,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "800",
        color: "white",
        marginRight: 5,
    }
})