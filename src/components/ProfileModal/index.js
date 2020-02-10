import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { profileVisibleSelector } from '../../redux/selectors';
import colors from '../../assets/colors';
import { hideProfile } from '../../redux/actions/app';
import Typography from '../Typography';
import images from '../../assets/images';

const { height, width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    marginHorizontal: 0,
    marginBottom: 0,
    marginTop: height / 5,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  content: {
    flex: 1,
    marginTop: 45,
    marginBottom: height / 7,
    justifyContent: 'space-between',
  },
  image: {
    width: width / 2,
    height: width / 2,
    alignSelf: 'center',
  },
});

export default () => {
  const profileVisible = useSelector(profileVisibleSelector);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(hideProfile());
  };

  return (
    <Modal
      isVisible={profileVisible}
      style={styles.container}
      onBackdropPress={onClose}
    >
      <View style={styles.content}>
        <Typography text="JOHNNY JONES" color={colors.white} />
        <Typography
          text="YOU ARE ON:"
          color={colors.white}
          fontSize={16}
          lineHeight={19}
        />
        <Image
          source={images.snake}
          resizeMode="contain"
          style={styles.image}
        />
        <View>
          <Typography
            text="THE COBRAS"
            color={colors.secondary}
            marginBottom={15}
          />
          <Typography
            text="6TH GRADE GUYS BASKETBALL"
            color={colors.secondary}
            fontSize={16}
            lineHeight={19}
          />
        </View>
      </View>
    </Modal>
  );
};
