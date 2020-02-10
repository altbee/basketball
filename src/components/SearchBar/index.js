import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  input: {
    borderColor: colors.grey2,
    fontSize: 16,
    lineHeight: 19,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 20,
    marginTop: 28,
    paddingHorizontal: 8,
    paddingBottom: 5,
    paddingTop: 7,
    fontWeight: 'bold',
  },
});

export default () => {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={colors.grey1}
      placeholder="Search"
    />
  );
};
