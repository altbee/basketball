import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../assets/colors';

const { width } = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    marginVertical: 100,
    justifyContent: 'space-around',
  },
  image: {
    width: width / 2,
    alignSelf: 'center',
  },
});
