import React from 'react';
import { Image, Text, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
const ListItem = ({ item }) => {
    return (
        <View style={{
            flexDirection: "row", justifyContent: "space-around",
            backgroundColor: "#FF6102", paddingVertical: 10, paddingHorizontal: 15,
            marginBottom: 10, borderRadius: 30, alignItems: "center", height: height * 0.1,
        }}>
            <View>
                <Image source={item.brand}
                    style={{ width: width * 0.25, height: width * 0.04 }} />
            </View>
            <Text style={{ width: width * 0.25, textAlign: "center", fontSize: 14, color: "white" }}>{item.time}</Text>
            <Text style={{ width: width * 0.25, textAlign: "center", fontSize: 14, color: "white" }}>{item.count} koltuk</Text>
            <Text style={{ width: width * 0.25, textAlign: "right", fontSize: 14, color: "white" }}>{item.price} TL</Text>
        </View>
    )
}

export default ListItem;