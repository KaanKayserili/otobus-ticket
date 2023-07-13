import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hoşgeldiniz!</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={"Mail Adresiniz"} />
                <TextInput style={styles.input} placeholder={"Şifreniz"} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Register") }}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Search") }}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
    },
    inputContainer: {
        width: "80%",
        paddingVertical: "5%",
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: "lightgray",
        marginVertical: "5%",
    },
    buttonContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#FF6102",
        padding: 7.5,
        borderRadius: 15,
        width: "35%",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "800",
        color: "white",
        textAlign: "center",
    }
})