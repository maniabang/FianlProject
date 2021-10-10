import React from 'react'
import { StyleSheet ,View, Text } from 'react-native'
import Title from '../components/Title'
import Form from '../components/Form'
import tw from 'tailwind-react-native-classnames'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={tw`w-3/4`}>
                <Title text="Login" />
                <Form />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });