import React from 'react';
import { Text, Pressable, View } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View style={styles.container}>
        <Pressable
            onPress={()=>{console.log("presionado...")}}
        >
            <Text 
                style={styles.text}
            >Gerar</Text>
        </Pressable>

        <Pressable
            onPress={()=>{console.log("presionado...")}}
        >
            <Text
                style={styles.text}
            >Copiar</Text>
        </Pressable>
    </View>
  );
}