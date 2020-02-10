import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingHorizontal: 33,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});

const Button = ({ label, onPress, primary }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text} onPress={onPress}>
      {label}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  primary: true,
};

export default Button;
