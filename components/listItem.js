import React from 'react';
import { Text, View } from 'react-native';

const ListItem = ({ item }) => {
    return (
        <View style={{
            flexDirection: "row", justifyContent: "space-around",
            backgroundColor: "#FF6102", paddingVertical: 10, paddingHorizontal: 15,
            marginBottom: 10, borderRadius: 30, alignItems: "center",
        }}>
            <Text numberOfLines={1} style={{ width: "25%", textAlign: "left", fontSize: 14, color: "white" }}>{item.brand}</Text>
            <Text style={{ width: "25%", textAlign: "center", fontSize: 14, color: "white" }}>{item.time}</Text>
            <Text style={{ width: "25%", textAlign: "center", fontSize: 14, color: "white" }}>{item.count} koltuk</Text>
            <Text style={{ width: "25%", textAlign: "right", fontSize: 14, color: "white" }}>{item.price} TL</Text>
        </View>
    )
}

export default ListItem;