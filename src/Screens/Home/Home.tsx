import React from 'react';
import { View } from 'react-native';

import { styles } from './Style';
import { BatLogo } from '../../Components/Logo/BatLogo';
import { BatTextInput } from '../../Components/BatTextInput/BatTextInput';
import { BatButton } from '../../Components/BatButton/BatButton';

export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo></BatLogo>
      </View>
      <View style={styles.textInputContainer}>
        <BatTextInput></BatTextInput>
      </View>
      <BatButton></BatButton>
    </View>
  );
}