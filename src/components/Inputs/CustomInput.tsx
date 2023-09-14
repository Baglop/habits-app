import * as React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '../../theme/colors';
import {CustomInputProps} from './types';

const CustomInput = (props: CustomInputProps) => {
  return (
    <View style={[inputStyle.inputContainer, props.containerStyle]}>
      <TextInput {...props} />
    </View>
  );
};

const inputStyle = StyleSheet.create({
  inputContainer: {
    width: '100%',
    backgroundColor: COLORS.white,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});

export default CustomInput;
