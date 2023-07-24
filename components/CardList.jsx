import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import CardComponent from './CardComponent';

const CardList = ({ data, onPress }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
            <CardComponent foodImage={item.foodImage} foodName={item.foodName} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CardList;
