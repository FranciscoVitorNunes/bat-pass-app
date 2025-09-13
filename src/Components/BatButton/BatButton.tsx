import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../service/password-service';
import * as Clipboard from 'expo-clipboard'


export function BatButton() {

    const [pass, setPass] = useState("")

    const handleGeneratePassword = () =>{
        const password = generatePass()
        setPass(password)
    }
    const handleCopyPassword = () =>{
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
        <BatTextInput pass={pass}></BatTextInput>
        <Pressable
            onPress={handleGeneratePassword}
            style={styles.button}
        >
            <Text 
                style={styles.text}
            >Gerar</Text>
        </Pressable>

        <Pressable
            onPress={handleCopyPassword}
            style={styles.button}
        >
            <Text
                style={styles.text}
            >Copiar</Text>
        </Pressable>
    </>
  );
}