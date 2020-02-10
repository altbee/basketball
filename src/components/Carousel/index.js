import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import images from '../../assets/images';

const { width } = Dimensions.get('screen');

const sliderItemWidth = width * 5 / 9;

const styles = StyleSheet.create({
  image: {
    width: sliderItemWidth,
    height: sliderItemWidth,
    borderRadius: sliderItemWidth / 2,
  },
});

export default () => {
  const renderItem = ({ item }) => {
    return <Image source={item} resizeMode="contain" style={styles.image} />;
  };
  return (
    <View>
      <Carousel
        autoplay
        sliderWidth={width}
        itemWidth={sliderItemWidth}
        data={images.basketBallImages}
        renderItem={renderItem}
        inactiveSlideScale={0.7}
        inactiveSlideOpacity={0.9}
        loop
      />
    </View>
  );
};
