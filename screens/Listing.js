import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../components/header';
import ListItem from '../components/listItem';
import listings from '../utils/listings';
import { TouchableOpacity } from 'react-native';

const Listing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title={"Sefer Seç"} navigation={navigation} />

            <FlatList
                data={listings}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scroll}
                initialNumToRender={20}
                ListEmptyComponent={() => (
                    <View style={{ marginTop: "5%" }}>
                        <Text>Henüz Satışta Bir Bilet Bulunmamaktadır.</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.id.toString()} onPress={() => { navigation.navigate("Details", { item: item }) }}>
                        <ListItem item={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Listing

const styles = StyleSheet.create({
    container: {
        paddingTop: 28,
        backgroundColor: "#FFF",
    },
    scroll: {
        width: "90%",
        alignSelf: "center",
        paddingVertical: 40,
    },
})