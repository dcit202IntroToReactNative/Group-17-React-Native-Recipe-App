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




return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}> Add New Recipe</Text>
            </View>


 <View style={styles.addImageContainer}>
                <TouchableOpacity style={styles.addImageBox} onPress={handleAddImage}>
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                    ) : (
                        <AntDesign name="pluscircleo" size={48} color="#3200BF" />
                    )}
                </TouchableOpacity>
            </View>

  <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#A9A9A9"

            />
            <TextInput
                style={styles.input}
                placeholder="Category"
                placeholderTextColor="#A9A9A9"

            />
      <TextInput
                style={styles.largeInput}
                placeholder="Ingredients"
                placeholderTextColor="#A9A9A9"
                multiline

            />
            <TextInput
                style={styles.largeInput}
                placeholder="Ingredients"
                placeholderTextColor="#A9A9A9"
                multiline

            />
            <TouchableOpacity style={styles.saveButton} >
                <Text style={styles.saveButtonText}>Save Recipe</Text>
            </TouchableOpacity>



        </ScrollView>
    );
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























































