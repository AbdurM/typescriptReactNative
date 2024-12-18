import {Text, View} from 'react-native';
import React from 'react';

const typesafety = () => {
  let name = 'abdur';
  // name = 20; // uncommenting this will show errorr
  <View>
    <Text>{name}</Text>
  </View>;
};

export default typesafety;
