import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import tw from 'tailwind-react-native-classnames';

const ChatbotScreen = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate('UserScreen')}
                style={tw`absolute top-32 left-2 z-50 p-3 rounded-full`}>
                <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text>Welcome Chatbot</Text>
            </View>
        </SafeAreaView>
    )
}

export default ChatbotScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
