import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';
import KeywordBar from '../../components/KeywordBar';
import SearchBar from '../../components/SearchBar';
import BottomBar from '../../components/BottomBar';
import PageContentContainer from '../../components/PageContentContainer';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import colors from '../../assets/colors';
import Carousel from '../../components/Carousel';
import CongratulationsModal from '../../components/CongratulationModal';

const Home = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(modalVisible => !modalVisible);
  };
  const onConfirm = () => {
    setModalVisible(false);
    navigation.navigate('GameDetails');
  };
  return (
    <View style={styles.container}>
      <CongratulationsModal
        visible={modalVisible}
        onClose={toggleModal}
        onConfirm={onConfirm}
      />
      <PageContentContainer>
        <SearchBar />
        <KeywordBar />
        <View style={styles.content}>
          <Typography text="Basketball" />
          <Carousel />
          <Typography
            color={colors.grey3}
            fontSize={16}
            lineHeight={19}
            text="Lorem ipsum. .fdahfdkafjh;kafjldaskflkdashjfdlksajfhlkdasjf lkadjfl;kadsflfj;alkdfjalskjfhdsal;kfjn;kdsajhf;ksaljf;ksajfh;sa"
          />

          <Button label="Join" onPress={toggleModal} />
        </View>
      </PageContentContainer>
      <BottomBar />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default Home;
