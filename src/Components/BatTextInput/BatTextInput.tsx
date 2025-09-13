import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps{
    pass: string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput 
    placeholder='Pass...'
    value={props.pass}
    style={styles.inputer} />
  );
}