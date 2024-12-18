import {View, Button} from 'react-native';
import React from 'react';

const typesafeFunctions = () => {
  function onPressButtonClick(
    firstNumber: number,
    secondNumber: number,
    operation: string,
  ): number {
    if (operation === 'sum') {
      return firstNumber + secondNumber;
    }
    return 0;
  }

  return (
    <View>
      <Button
        title="click me"
        onPress={() => onPressButtonClick(1, 2, 'sum')}
      />
    </View>
  );
};

export default typesafeFunctions;
