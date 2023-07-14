import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, View, Dimensions } from 'react-native'

const { width } = Dimensions.get("window");

const listSeats = () => {
    const items = [];

    for (let i = 0; i < 10; i++) {
        items.push(
            <View key={i} style={{ flexDirection: "column" }}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="car-seat" size={width * 0.08} color={i % 3 == 0 ? "#008800" : "#cc2200"} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="car-seat" size={width * 0.08} color={(i + 2) % 3 == 0 ? "#008800" : "#cc2200"} />
                </TouchableOpacity>
                {/* Space */}
                <TouchableOpacity style={{ marginTop: width * 0.08 }}>
                    <MaterialCommunityIcons name="car-seat" size={width * 0.08} color={(i - 1) % 3 == 0 ? "#008800" : "#cc2200"} />
                </TouchableOpacity>
            </View>
        );
    }
    return items;
}

export default listSeats;