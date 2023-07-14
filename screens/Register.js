import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../components/header'
import AwesomeAlert from 'react-native-awesome-alerts'

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [tc, setTC] = useState("");
    const [birth, setBirth] = useState("");
    const [gender, setGender] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordReplace, setPasswordReplace] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("Başarılı!");
    const [alertMessage, setAlertMessage] = useState("Ödemeniz Başarı ile tamamlanmıştır.");

    const isRegister = () => {
        if ((name.length >= 3 && surname.length >= 2) &&
            ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(mail) == true) &&
            (tc.length === 11) && ((parseInt(tc.charAt(str.length - 1))) % 2 == 0) &&
            ((/^(0?[1-9]|[12][0-9]|3[01])[-/.](0?[1-9]|1[0-2])[-/.](19|20)\d\d$/).test(birth) == true) &&
            ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(mail) == true) && ((gender == "male") || (gender == "female")) &&
            (password === passwordReplace) && (password.length >= 6)) {
            navigation.navigate("Search");
        }
        else {
            setShowAlert(true);
            setAlertTitle("Başarısız!");
            setAlertMessage("Eksik veya Yanlış Doldurdunuz")
        }
    }

    return (
        <View style={styles.container}>

            <Header title={"Kayıt Ol"} navigation={navigation} />

            <View style={styles.processContainer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder={"Adınız"} keyboardType='default'
                        value={name} onChangeText={(name) => setName(name)} />

                    <TextInput style={styles.input} placeholder={"Soyadınız"} keyboardType='default'
                        value={surname} onChangeText={(surname) => setSurname(surname)} />

                    <TextInput style={styles.input} placeholder={"TC Kimlik Numaranız"} keyboardType='numeric'
                        value={tc} onChangeText={(tc) => setTC(tc)} />

                    <TextInput style={styles.input} placeholder={"Doğum Tarihiniz"} keyboardType='default'
                        value={birth} onChangeText={(birth) => setBirth(birth)} />

                    <TextInput style={styles.input} placeholder={"Cinsiyet"} keyboardType='default'
                        value={gender} onChangeText={(gender) => setGender(gender)} />

                    <TextInput style={styles.input} placeholder={"Mail Adresiniz"} keyboardType='email-address'
                        value={mail} onChangeText={(mail) => setMail(mail)} />

                    <TextInput style={styles.input} placeholder={"Şifreniz"} secureTextEntry={true} autoCapitalize="none"
                        value={password} onChangeText={(password) => setPassword(password)} />

                    <TextInput style={styles.input} placeholder={"Şifreniz Tekrar"} autoCapitalize="none" secureTextEntry={true}
                        value={passwordReplace} onChangeText={(passwordReplace) => setPasswordReplace(passwordReplace)} />
                </View>

                <TouchableOpacity style={styles.button} onPress={isRegister}>
                    <Text style={styles.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>
            </View>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title={alertTitle}
                message={alertMessage}
                showConfirmButton={true}
                confirmText="Tamam"
                confirmButtonColor={"#FF2400"}
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