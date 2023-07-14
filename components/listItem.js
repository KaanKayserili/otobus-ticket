import React from 'react';
import { Image, Text, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
const ListItem = ({ item }) => {
    return (
        <View style={{
            flexDirection: "row", justifyContent: "space-around",
            backgroundColor: "#FFF", paddingVertical: 10, paddingHorizontal: 15,
            marginBottom: 10, borderWidth: 2.5, borderColor: "rgba(33, 33, 33, 0.1)", borderRadius: 30, alignItems: "center", height: height * 0.1,
        }}>
            <View>
                <Image source={item.brand}
                    style={{ width: width * 0.25, height: width * 0.1 }} />
            </View>
            <Text style={{ width: width * 0.25, textAlign: "center", fontSize: 14, color: "#212121" }}>{item.time}</Text>
            <Text style={{ width: width * 0.25, textAlign: "center", fontSize: 14, color: "#212121" }}>{item.count} koltuk</Text>
            <Text style={{ width: width * 0.25, textAlign: "right", fontSize: 14, color: "#212121" }}>{item.price} TL</Text>
        </View>
    )
}

export default ListItem;