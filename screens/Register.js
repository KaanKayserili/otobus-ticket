import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../components/header'

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Header title={"Kayıt Ol"} navigation={navigation} />

            <View style={styles.processContainer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder={"Adınız"} />
                    <TextInput style={styles.input} placeholder={"Soyadınız"} />
                    <TextInput style={styles.input} placeholder={"TC Kimlik Numaranız"} />
                    <TextInput style={styles.input} placeholder={"Doğum Tarihiniz"} />
                    <TextInput style={styles.input} placeholder={"Cinsiyet"} />
                    <TextInput style={styles.input} placeholder={"Mail Adresiniz"} />
                    <TextInput style={styles.input} placeholder={"Şifreniz"} />
                    <TextInput style={styles.input} placeholder={"Şifreniz Tekrar"} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Search") }}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        paddingTop: 28,
    },
    processContainer: {
        alignItems: "center"
    },
    inputContainer: {
        width: "80%",
        paddingVertical: "5%",
    },
    input: {
        padding: 10,
        borderRadius: 40,
        backgroundColor: "lightgray",
        marginVertical: "3%",
    },
    button: {
        backgroundColor: "#FF6102",
        padding: 7.5,
        borderRadius: 15,
        width: "50%",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "800",
        color: "white",
        textAlign: "center",
    }
})