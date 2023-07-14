import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/header';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

const { width } = Dimensions.get("window");

const Pay = ({ navigation, route }) => {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={"Ödeme Ekranı"} />

            <View style={styles.creditCard}>
                <View style={{
                    backgroundColor: "#FFD700", width: width * 0.1, height: width * 0.1,
                    borderRadius: width * 0.025, marginRight: width * 0.05, marginBottom: width * 0.08
                }}></View>

                <View>
                    <TextInput style={[styles.input, { width: "85%" }]} placeholder='Kart Numarası' keyboardType='phone-pad' maxLength={16} />
                    <TextInput style={[styles.input, { width: "85%" }]} placeholder='Kart Üzerindeki İsim' />

                    <View style={styles.creditCardDateCVC}>
                        <TextInput style={[styles.input, { width: "40%" }]} placeholder='CVC' keyboardType='phone-pad' maxLength={3} />
                        <TextInput style={[styles.input, { width: "40%", marginLeft: "5%" }]} placeholder='Tarih' keyboardType='phone-pad' maxLength={5} />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", backgroundColor: "#FF6102", borderRadius: 20, width: "50%", marginLeft: "40%", paddingVertical: 10 }}>
                <Text style={{ textAlign: "center", color: "white", fontSize: 24, fontWeight: "800" }}>{item.price} TL</Text>
                <Text style={{ textAlign: "center", color: "white", fontSize: 20, fontWeight: "600" }}>ÖDE</Text>
            </TouchableOpacity>
        </View>
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
        color:"#111111"
    }
})