import React from 'react';
import { View } from 'react-native';

import { styles } from './Style';
import { BatLogo } from '../../Components/Logo/BatLogo';

export function Home() {
  return (
    <View style={styles.container}>
      <View>
        <BatLogo>

        </BatLogo>
      </View>
    </View>
  );
}