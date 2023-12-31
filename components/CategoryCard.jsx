import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CategoryCard = ({ Name, image }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryName}>{Name}</Text>
            <Image source={image} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 308,
        height: 55,
        flexShrink: 0,
        borderRadius: 15,
        backgroundColor: '#F6F6F6',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        margin: 10,

    },
    image: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    categoryName: {
        fontSize: 16,
        color: '#000',
        flexGrow: 1
    },
});

export default CategoryCard;
