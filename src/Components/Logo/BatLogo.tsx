import React from 'react';
import { Text, Image} from 'react-native';

import { styles } from './BatLogoStyle';
const batLogo = require('../../../assets/bat-logo.png');

export function BatLogo() {
  return (
    <>
        <Text style={styles.text}>Bat Password App</Text>
        <Image
          source={batLogo}
          style={{width: 100, height: 100, alignSelf: 'center'}}
        />
    </>
  );
}