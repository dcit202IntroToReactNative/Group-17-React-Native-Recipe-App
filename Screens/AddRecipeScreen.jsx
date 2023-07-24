import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


const AddRecipeScreen = () => {
    const [imageUri, setImageUri] = useState(null);

    const handleAddImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to pick an image.');
            return;
        }

         const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.uri);
        }
    };




















const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        justifyContent: "center"
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    addImageContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },























































