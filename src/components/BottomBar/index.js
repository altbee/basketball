import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { useDispatch } from 'react-redux';
import { showProfile } from '../../redux/actions/app';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: colors.lightBlue,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 24,
  },
  text: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold',
  },
});

export default () => {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(showProfile());
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Your Profile</Text>
    </TouchableOpacity>
  );
};
