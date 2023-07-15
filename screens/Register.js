import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, Dimensions } from 'react-native';
import Header from '../components/header';
import AwesomeAlert from 'react-native-awesome-alerts';
import { RadioButton } from 'react-native-paper';
import { isRegister } from '../utils/isRegister';
import DatePicker from "react-native-modern-datepicker";
import { Ionicons } from '@expo/vector-icons';
const { width } = Dimensions.get("window");

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [tc, setTC] = useState("");
    const [birth, setBirth] = useState("");
    const [gender, setGender] = useState('male');
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordReplace, setPasswordReplace] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("Başarılı!");
    const [alertMessage, setAlertMessage] = useState("Ödemeniz Başarı ile tamamlanmıştır.");

    const RegisterFunc = () => {
        if (isRegister(name, surname, tc, birth, gender, mail, password, passwordReplace, setShowAlert, setAlertTitle, setAlertMessage) === true) {
            cleanInputs();
            navigation.navigate("Search");
        }
    }

    const cleanInputs = () => {
        setName("");
        setSurname("");
        setTC("");
        setBirth("");
        setGender("male");
        setMail("");
        setPassword("");
        setPasswordReplace("");
    }

    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const closeDatePicker = () => {
        setShowDatePicker(false);
    };

    const handleDateChange = (date) => {
        setBirth(date);
    };

    const handlePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>

            <Header title={"Kayıt Ol"} navigation={navigation} />

            <Modal visible={showDatePicker} animationType="slide" transparent>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ backgroundColor: 'white' }}>
                        <DatePicker
                            mode='calendar'
                            selected={birth}
                            onDateChange={handleDateChange}
                            options={{ mainColor: "#FF6101" }}
                            current={birth}
                            selectorEndingYear={2005}
                        />
                        <TouchableOpacity style={[styles.button, { alignSelf: "center", marginBottom: "5%" }]} onPress={closeDatePicker}>
                            <Text style={styles.buttonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            <View style={styles.processContainer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder={"Adınız"} keyboardType='default'
                        value={name} onChangeText={(name) => setName(name)} />

                    <TextInput style={styles.input} placeholder={"Soyadınız"} keyboardType='default'
                        value={surname} onChangeText={(surname) => setSurname(surname)} />

                    <TextInput style={styles.input} placeholder={"TC Kimlik Numaranız"} keyboardType='numeric'
                        value={tc} onChangeText={(tc) => setTC(tc)} placeholderTextColor={"#777777"} />

                    <TouchableOpacity onPress={openDatePicker}>
                        <Text style={{ color: "#777777", backgroundColor: "lightgray", padding: 15, borderRadius: 40, marginVertical: "3%" }}>
                            {birth === "" ? "Lüften Doğum Tarihinizi Seçin" : birth}
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.radioButtonContainer}>
                        <View style={styles.chooseWay}>
                            <Text style={styles.text}>Erkek</Text>
                            <RadioButton value='male' status={gender === 'male' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('male')} color='#00BBFF' />
                        </View>

                        <View style={styles.chooseWay}>
                            <Text style={styles.text}>Kadın</Text>
                            <RadioButton value='female' status={gender === 'female' ? 'checked' : 'unchecked'}
                                onPress={() => setGender('female')} color='#FF77BB' />
                        </View>
                    </View>

                    <TextInput style={styles.input} placeholder={"Mail Adresiniz"} keyboardType='email-address'
                        value={mail} onChangeText={(mail) => setMail(mail)} />

                    <View style={{ justifyContent: "space-around", flexDirection: "row", alignItems: "center", backgroundColor: "lightgray", borderRadius: 40, padding: 10, marginVertical: "3%", }}>
                        <TextInput
                            style={{ width: width * 0.64 }}
                            value={password}
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={(password) => setPassword(password)}
                            autoCapitalize="none"
                            placeholder={"Şifreniz"}
                        />
                        <TouchableOpacity onPress={handlePasswordVisibility}>
                            <Ionicons size={width * 0.05} name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} color={"#FF6101"} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: "space-around", flexDirection: "row", alignItems: "center", backgroundColor: "lightgray", borderRadius: 40, padding: 10, marginVertical: "3%", }}>
                        <TextInput
                            style={{ width: width * 0.64 }}
                            value={passwordReplace}
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={(passwordReplace) => setPasswordReplace(passwordReplace)}
                            autoCapitalize="none"
                            placeholder={"Şifreniz Tekrar"}
                        />
                        <TouchableOpacity onPress={handlePasswordVisibility}>
                            <Ionicons size={width * 0.05} name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} color={"#FF6101"} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={RegisterFunc}>
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

    radioButtonContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        width: "100%",
        marginVertical: "2.5%",
    },
    chooseWay: {
        flexDirection: "row",
        alignItems: "center",
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