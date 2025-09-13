import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';



export function BatButton() {

    const [pass, setPass] = useState("")

    const handlePass = () =>{
        setPass("olá")
    }

  return (
    <>
        <BatTextInput pass={pass}></BatTextInput>
        <Pressable
            onPress={handlePass}
            style={styles.button}
        >
            <Text 
                style={styles.text}
            >Gerar</Text>
        </Pressable>

        <Pressable
            onPress={()=>{console.log("presionado...")}}
            style={styles.button}
        >
            <Text
                style={styles.text}
            >Copiar</Text>
        </Pressable>
    </>
  );
}