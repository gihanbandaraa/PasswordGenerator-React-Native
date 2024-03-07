import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

//Form Validation
import * as Yup from 'yup'

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4,"Should be Min Of 4 characters")
  .max(16,"Should be Max Of 16 characters")
  .required("Lenght is required")

})
export default function App() {
  const [password,setPassword]= useState('')
  const [isPasswordGenerated,setIsPasswordGenerated]= useState(false)

  const [lowerCase,setLowerCase]= useState(true)
  const [upperCase,setUpperCase]= useState(false)
  const [numbers,useNumbers]= useState(false)
  const [stymbols,useSymbols]= useState(false)
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})