import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

export default function FormButton(props) {

    let {
        text,
        primary,
        ...other
    } = props

    // let primaryStyling = tw`bg-blue-500 border-none px-6 py-2 rounded`,
    //     secondaryStyling = tw`border-blue-500 border bg-transparent px-6 py-2 rounded`,
    //     primaryText = tw`text-center text-white font-bold`,
    //     secondaryText = tw`text-center text-blue-500 font-bold`

    return (
        <View style={styles.container}>
            <TouchableOpacity 
            style={primary ? styles.btn_Login : styles.btn_Register} {...other}>
                <Text style={primary ? styles.txt_Login : styles.txt_Register}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 50,
    },
    btn_Login: {
        backgroundColor: '#000000',
        width: '100%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
    },
    txt_Login: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    btn_Register: {
        backgroundColor: 'white',
        borderColor: 'black',
        width: '100%',
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
    },
    txt_Register: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },
})