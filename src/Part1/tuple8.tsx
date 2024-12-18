import {View} from 'react-native';
import React from 'react';

type TupleTypeExampleProps = {
  margin: [number, number, number, number];
};

const TupleTypeExample = ({margin}: TupleTypeExampleProps) => {
  return <View style={{marginTop: margin[0], marginRight: margin[1]}} />;
};

export default TupleTypeExample;
