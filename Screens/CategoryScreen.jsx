import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import CategoryCard from '../components/CategoryCard';


const categoryData = [
    {
        id: 1,
        categoryName: 'Breakfast',
        image: require('../assets/cg-breakfast.png'),
    },
      {
        id: 2,
        categoryName: 'Lunch',
        image: require('../assets/cg-lunch.png'),
    },

const CategoryScreen = () => {
    const renderItem = ({ item }) => (
        <CategoryCard Name={item.categoryName} image={item.image} />
    );
