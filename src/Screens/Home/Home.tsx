import React from 'react';
import { View } from 'react-native';

import { styles } from './Style';
import { BatLogo } from '../../Components/Logo/BatLogo';
import { BatTextInput } from '../../Components/BatTextInput/BatTextInput';

export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo></BatLogo>
      </View>
      <View style={styles.textInputContainer}>
        <BatTextInput></BatTextInput>
      </View>
    </View>
  );
}