import React, {useState} from 'react'
import { View, Text } from 'react-native'
import FormLabel from './FormLabel'
import tw from 'tailwind-react-native-classnames'
import FormInput from './FormInput'
import FormButton from './FormButton'

const FormInputGroup = ({children}) =>{
    return(
        <View style={tw`my-3`}>
            {children}
        </View>
    )
}

export default function Form() {

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
                />
            </FormInputGroup>
            <FormButton primary={true} text="Login" />
        </View>
    )
}
