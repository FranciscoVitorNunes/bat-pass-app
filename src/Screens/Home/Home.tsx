import React from 'react';
import { View } from 'react-native';

import { styles } from './Style';
import { BatLogo } from '../../Components/Logo/BatLogo';

export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo></BatLogo>
      </View>
    </View>
  );
}