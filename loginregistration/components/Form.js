import React, {useState} from 'react'
import { View, Text } from 'react-native'
import FormLabel from './FormLabel'
import tw from 'tailwind-react-native-classnames'
import FormInput from './FormInput'
import FormButton from './FormButton'
import { useNavigation } from '@react-navigation/native';

const FormInputGroup = ({children}) =>{
    return(
        <View style={tw`my-3`}>
            {children}
        </View>
    )
}

export default function Form({signup, onSubmit}) {

    const navigation = useNavigation(),
    screen = signup ? "Home" : "Register";
    const [email, setEmail] = useState(""),
    [password, setPassword] = useState("")
    return (
        <View>
            <FormInputGroup>
                <FormLabel text="Email" />
                <FormInput 
                    onChangeText={(text)=>setEmail(text)} 
                    value= {email}
                />
                
            </FormInputGroup>

            <FormInputGroup>
                <FormLabel text="Password" />
                <FormInput 
                    onChangeText={(text)=>setPassword(text)}
                    value= {password}
                    secureTextEntry={true} 
                />
            </FormInputGroup>
            <FormButton primary={true} text={!signup ? "Login": "Register"} 
            onPress={()=>onSubmit(email, password)}/>

            <FormButton primary={false} onPress={() => navigation.navigate(screen)}
            text={signup ? "Login": "Register"} />
        </View>
    )
}