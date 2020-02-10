import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    maxWidth: '80%',
    alignSelf: 'center',
  },
});

const Typography = ({
  text,
  color,
  fontSize,
  lineHeight,
  bold,
  marginBottom,
}) => (
  <Text
    style={[
      styles.text,
      {
        color,
        fontSize,
        lineHeight,
        fontWeight: bold ? 'bold' : 'normal',
        marginBottom,
      },
    ]}
  >
    {text}
  </Text>
);

Typography.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.number,
  bold: PropTypes.bool,
  marginBottom: PropTypes.number,
};

Typography.defaultProps = {
  color: colors.secondary,
  fontSize: 24,
  lineHeight: 29,
  bold: true,
  marginBottom: 0,
};

export default Typography;
