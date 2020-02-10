import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import BottomBar from '../../components/BottomBar';
import PageContentContainer from '../../components/PageContentContainer';
import Typography from '../../components/Typography';
import images from '../../assets/images';
import colors from '../../assets/colors';

const GameDetails = () => {
  return (
    <View style={styles.container}>
      <PageContentContainer>
        <View style={styles.content}>
          <Typography text={`Your next game\n is against:`} />
          <Image
            style={styles.image}
            source={images.crocodile}
            resizeMode="contain"
          />

          <View>
            <Typography
              text="The Raptors"
              color={colors.primary}
              fontSize={24}
              lineHeight={29}
              marginBottom={28}
            />
            <Typography
              text="3/11/20 ~ 3:30PM"
              color={colors.primary}
              fontSize={16}
              lineHeight={19}
              marginBottom={8}
            />
            <Typography
              text="Court B"
              color={colors.primary}
              fontSize={16}
              lineHeight={19}
            />
          </View>
        </View>
      </PageContentContainer>
      <BottomBar />
    </View>
  );
};

export default GameDetails;
