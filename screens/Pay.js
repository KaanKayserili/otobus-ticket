import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/header';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

const { width } = Dimensions.get("window");

const Pay = ({ navigation, route }) => {
    const { item } = route.params;

    const [cardNo, setCardNo] = useState("");
    const [cardName, setCardName] = useState("");
    const [cvc, setCVC] = useState("");
    const [date, setDate] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState("Başarılı!");
    const [alertMessage, setAlertMessage] = useState("Ödemeniz Başarı ile tamamlanmıştır.");

    const paying = () => {
        if (cardNo !== "" && cardName !== "" && cvc !== "" && date !== "") {
            if (cardNo.length !== 16) {
                setShowAlert(true);
                setAlertTitle("Hata!");
                setAlertMessage("Kart numaranızı yanlış girdiniz. Lütfen kontrol ediniz.");

            }
            else if (cvc.length !== 3) {
                setShowAlert(true);
                setAlertTitle("Hata!");
                setAlertMessage("CVC/CVC2 güvenlik kodunuzu yanlış girdiniz!");
            }
            else if (date.length !== 5) {
                setShowAlert(true);
                setAlertTitle("Hata!");
                setAlertMessage("Kart son kullanım tarihini yanlış girdiniz!");
            }
            else if (date.charAt(2) !== "/") {
                setShowAlert(true);
                setAlertTitle("Hata!");
                setAlertMessage("Kart son kullanım tarihini yanlış girdiniz!");
            }
            else {
                setShowAlert(true);
                setAlertTitle("Başarılı!");
                setAlertMessage("Ödemeniz Başarıyla Tamamlandı!");
            }
        }
        else {
            setShowAlert(true);
            setAlertTitle("Hata!");
            setAlertMessage("Kutucukları Boş Bırakmayınız");
        }
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={"Ödeme Ekranı"} />

            <View style={styles.creditCard}>
                <View style={{
                    backgroundColor: "#FFD700", width: width * 0.1, height: width * 0.1,
                    borderRadius: width * 0.025, marginRight: width * 0.05, marginBottom: width * 0.08
                }}></View>

                <View>
                    <TextInput style={[styles.input, { width: "85%" }]} placeholder='Kart Numarası'
                        keyboardType='phone-pad' maxLength={16} value={cardNo} onChangeText={(cardNo) => setCardNo(cardNo)} />
                    <TextInput style={[styles.input, { width: "85%" }]} placeholder='Kart Üzerindeki İsim'
                        value={cardName} onChangeText={(cardName) => setCardName(cardName)} />

                    <View style={styles.creditCardDateCVC}>
                        <TextInput style={[styles.input, { width: "40%" }]} placeholder='CVC' keyboardType='phone-pad'
                            maxLength={3} value={cvc} onChangeText={(cvc) => setCVC(cvc)} />
                        <TextInput style={[styles.input, { width: "40%", marginLeft: "5%" }]} placeholder='Tarih'
                            keyboardType='phone-pad' maxLength={5} value={date} onChangeText={(date) => setDate(date)} />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={{
                flexDirection: "column", justifyContent: "center", backgroundColor: "#FF6102",
                borderRadius: 20, width: "50%", marginLeft: "40%", paddingVertical: 10
            }} onPress={paying}>
                <Text style={{ textAlign: "center", color: "white", fontSize: 24, fontWeight: "800" }}>{item.price} TL</Text>
                <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontWeight: "600" }}>ÖDE</Text>
            </TouchableOpacity>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title={alertTitle}
                message={alertMessage}
                showConfirmButton={true}
                confirmText="Tamam"
                confirmButtonColor={alertTitle == "Başarılı!" ? "#008000" : "#ff2400"}
                onConfirmPressed={() => {
                    setShowAlert(false);
                }}
                titleStyle={{ fontSize: 24, fontWeight: "500" }}
                messageStyle={{ fontSize: 18 }}
                confirmButtonTextStyle={{ fontSize: 18, fontWeight: "700", paddingHorizontal: 12.5 }}
                confirmButtonStyle={{ borderRadius: 25, }}
                contentContainerStyle={{ borderRadius: 20 }}
            />
        </View >
    )
}

export default Pay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 28,
        backgroundColor: "#FFF",
    },
    creditCard: {
        width: width * 0.856,
        height: width * 0.48,
        marginLeft: "5%",
        marginVertical: "5%",
        backgroundColor: "#5555FF",
        borderRadius: 25,
        paddingHorizontal: "5%",
        paddingVertical: "7.5%",
        flexDirection: "row",
        alignItems: "center",
    },
    creditCardDateCVC: {
        flexDirection: "row",
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 2.5,
        borderRadius: 10,
        backgroundColor: "#dadddd",
        marginVertical: "1%",
        color: "#111111"
    }
})