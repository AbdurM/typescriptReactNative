import {Text, View} from 'react-native';
import React from 'react';

type CustomComponentProps = {
  fontSize: any;
};

const CustomComponent = ({fontSize}: CustomComponentProps) => {
  return (
    <View>
      {/* although the use fontSize below is wrong, typescript does not show any error. */}
      <Text style={{fontSize: fontSize.toUpperCase()}}>customComponent</Text>
    </View>
  );
};

export default CustomComponent;
