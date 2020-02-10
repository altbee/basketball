import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
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
    marginVertical: height / 7,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
  button: {
    alignSelf: 'center',
  },
});

const CongratulationsModal = ({ onConfirm, onClose, visible }) => {
  return (
    <Modal
      isVisible={visible}
      style={styles.container}
      onBackdropPress={onClose}
    >
      <View style={styles.content}>
        <Typography
          text={`Congratulations!!!\nYou just joined\nthe basketball team.\nStart practicing\ntoday!!`}
          color={colors.secondary}
          marginBottom={75}
        />
        <TouchableOpacity style={styles.button} onPress={onConfirm}>
          <Image
            source={images.basketBall}
            resizeMode="contain"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

CongratulationsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  visible: PropTypes.bool.isRequired,
};

CongratulationsModal.defaultProps = {
  onConfirm: () => {},
};

export default CongratulationsModal;
