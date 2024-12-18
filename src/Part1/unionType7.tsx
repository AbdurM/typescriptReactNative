import {Text, View} from 'react-native';
import React from 'react';

type UnionTypeExampleProps = {
  fontSize: 10 | 20 | 30;
  backgroundColor: 'red' | 'green' | 'blue';
};

const UnionTypeExample = ({
  fontSize,
  backgroundColor,
}: UnionTypeExampleProps) => {
  return (
    <View style={{backgroundColor: backgroundColor}}>
      <Text style={{fontSize: fontSize}}>Hello World</Text>
    </View>
  );
};

export default UnionTypeExample;
