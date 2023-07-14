import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import Header from '../components/header'
import AwesomeAlert from 'react-native-awesome-alerts'

const Search = ({ navigation }) => {

    const [checked, setChecked] = useState('going');

    const [here, setHere] = useState("");
    const [going, setGoing] = useState("");
    const [goingTurnTime, setGoingTurnTime] = useState("");
    const [goingTime, setGoingTime] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const listingQuery = () => {
        if (here !== "" && going !== "" && ((/^(0?[1-9]|[12][0-9]|3[01])[-/.](0?[1-9]|1[0-2])[-/.](19|20)\d\d$/).test(goingTime) == true)) {
            if (checked == "round-trip") {
                if (((/^(0?[1-9]|[12][0-9]|3[01])[-/.](0?[1-9]|1[0-2])[-/.](19|20)\d\d$/).test(goingTurnTime) == true)) {
                    navigation.navigate("Listing");
                }
                else {
                    setShowAlert(true);
                    setAlertTitle("Hata!");
                    setAlertMessage("Kutucukları Lütfen Boş Bırakmayınız ve/veya Yanlış Doldurmayınız.");
                }
            }
            else {
                navigation.navigate("Listing");
            }
        }
        else {
            setShowAlert(true);
            setAlertTitle("Hata!");
            setAlertMessage("Kutucukları Lütfen Boş Bırakmayınız.");
        }
    }

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
                    <TextInput style={styles.inputWhere} value={here} onChangeText={(here) => setHere(here)} />
                </View>

                <View style={styles.chooseWhere}>
                    <TextInput style={styles.inputWhere} value={going} onChangeText={(going) => setGoing(going)} />
                    <Text style={styles.text}>Nereye</Text>
                </View>
            </View>

            <View style={styles.dateContainer}>
                <View style={styles.goDateContainer}>
                    <Text style={styles.text}>Gidiş Tarihi</Text>
                    <TextInput style={styles.input} value={goingTime} onChangeText={(goingTime) => setGoingTime(goingTime)} />
                </View>

                {checked == "round-trip" ?
                    <View style={styles.goDateContainer}>
                        <Text style={styles.text}>Dönüş Tarihi</Text>
                        <TextInput style={styles.input} value={goingTurnTime} onChangeText={(goingTurnTime) => setGoingTurnTime(goingTurnTime)} />
                    </View> : null}
            </View>

            <TouchableOpacity style={styles.button} onPress={listingQuery}>
                <Text style={styles.buttonText}>Ara</Text>
                <Ionicons name={"search"} size={20} color={"white"} />
            </TouchableOpacity>

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