import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/header';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

const Pay = (props) => {
    const { item } = props.route.params;
    const { navigation } = props.route.params;
    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={"Ödeme Ekranı"} />

            <TextInput style={styles.input} placeholder='Kart Numarası' keyboardType='phone-pad' maxLength={16} />

            <TextInput style={styles.input} placeholder='Kart Üzerindeki İsim' />

            <TextInput style={styles.input} placeholder='CVC/CVC2' keyboardType='phone-pad' maxLength={3} />

            <TextInput style={styles.input} placeholder='Son Kullanma Tarihi' keyboardType='phone-pad' maxLength={5} />

            <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center", backgroundColor: "#FF6102", borderRadius: 10, width: "50%", marginLeft: "40%" }}>
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
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: "lightgray",
        marginVertical: "2.5%",
        width: "80%",
        marginLeft: "10%",
    }
})