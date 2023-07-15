import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { isLogin } from '../utils/isLogin';
const { width } = Dimensions.get("window");

const Login = ({ navigation }) => {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const logining = () => {
        if (isLogin(mail, password, setShowAlert, setAlertTitle, setAlertMessage) === true) {
            navigation.navigate("Search");
        }
    }

    return (
        <View style={styles.container}>

            <Image source={require("../assets/images/yanmazbilet.png")} style={{ width: width * 0.43296, height: width * 0.41184 }} />
            <Text style={styles.title}>Hoşgeldiniz!</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={"Mail Adresiniz"} value={mail}
                    keyboardType={"email-address"} onChangeText={(mail) => setMail(mail)} autoCapitalize="none" />

                <View style={{ justifyContent: "space-around", flexDirection: "row", alignItems: "center", backgroundColor: "lightgray", borderRadius: 40, padding: 10, marginVertical: "3%", }}>
                    <TextInput
                        style={{ width: width * 0.64 }}
                        value={password}
                        secureTextEntry={!isPasswordVisible}
                        onChangeText={password => setPassword(password)}
                        autoCapitalize="none"
                        placeholder={"Şifreniz"}
                    />
                    <TouchableOpacity onPress={handlePasswordVisibility}>
                        <Ionicons size={width * 0.05} name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} color={"#FF6101"} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("Register") }}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => logining()}>
                    <Text style={styles.buttonText}>Giriş Yap</Text>
                </TouchableOpacity>
            </View>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title={alertTitle}
                message={alertMessage}
                showConfirmButton={true}
                confirmText="Tamam"
                confirmButtonColor="#FF2400"
                onConfirmPressed={() => {
                    setShowAlert(false);
                }}
                titleStyle={{ fontSize: 24, fontWeight: "500" }}
                messageStyle={{ fontSize: 18 }}
                confirmButtonTextStyle={{ fontSize: 18, fontWeight: "700", paddingHorizontal: 12.5 }}
                confirmButtonStyle={{ borderRadius: 25, }}
                contentContainerStyle={{ borderRadius: 20 }}
            />

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
        fontWeight: "600",
        color: "#FF6101"
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
    buttonContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#FF6102",
        padding: 8,
        borderRadius: 24,
        width: "35%",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "800",
        color: "white",
        textAlign: "center",
    }
})