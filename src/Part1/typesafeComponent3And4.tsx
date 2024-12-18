import {Text, View} from 'react-native';
import React from 'react';

type CustomViewProps = {
  text: string;
  backgroundColor: string;
  fontSize?: number;
};

const CustomView = ({text, backgroundColor, fontSize}: CustomViewProps) => {
  return (
    <View style={{backgroundColor: backgroundColor}}>
      <Text style={{fontSize: fontSize || 16}}>{text}</Text>
    </View>
  );
};

export default CustomView;
