import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RadioButton } from 'react-native-paper'
import Header from '../components/header'
import ListItem from '../components/listItem'
import listings from '../components/listings'

const Details = ({ navigation, route }) => {
    const { item } = route.params;
    const [checked, setChecked] = useState('male');


    return (
        <View style={styles.container}>
            <Header title={"Sefer Detayı"} navigation={navigation} />

            <View style={{ width: "90%", marginLeft: "5%", marginTop: "5%" }}>
                <ListItem item={item} />
            </View>

            <View style={{ flexDirection: "row" }}>
                {listings.map((index) => {
                    <View key={index} style={{ flexDirection: "column", }}>
                        <View>
                            <TouchableOpacity></TouchableOpacity>
                            <TouchableOpacity></TouchableOpacity>
                        </View>

                        <View><TouchableOpacity></TouchableOpacity></View>
                    </View>
                })
                }
            </View>

            <View style={styles.radioButtonContainer}>
                <View style={styles.chooseWay}>
                    <Text style={styles.text}>Erkek</Text>
                    <RadioButton value='male' status={checked === 'male' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('male')} color='blue' />
                </View>

                <View style={styles.chooseWay}>
                    <Text style={styles.text}>Kadın</Text>
                    <RadioButton value='female' status={checked === 'female' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('female')} color='pink' />
                </View>
            </View>

            <Text style={{ textAlign: "center", marginBottom: "5%" }}>Koltuk No: {item.id}</Text>

            <TouchableOpacity style={{
                backgroundColor: "FF6102", padding: 5, borderRadius: 10, backgroundColor: "#FF6102",
                justifyContent: "center", alignItems: "center", flexDirection: "column", width: "40%", marginLeft: "55%"
            }} onPress={() => { navigation.navigate("Pay", { item: item }) }}>
                <View>
                    <Text style={{ color: "white", fontWeight: "700", fontSize: 28, textAlign: "center" }}>{item?.price} TL</Text>
                    <Text style={{ color: "white", fontWeight: "700", fontSize: 18, textAlign: "center" }}>Satın Al!</Text>
                </View>

                <Ionicons name={'arrow-forward-outline'} size={28} color={"#FFF"} />
            </TouchableOpacity>
        </View >
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 28,
        backgroundColor: "white",
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
})