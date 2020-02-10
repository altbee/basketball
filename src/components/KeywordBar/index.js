import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../assets/colors';

const keywords = [
  'Sports',
  'Pets',
  'Snacks',
  'Cars',
  'Houses',
  'Trucks',
  'Horses',
];

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  item: {
    borderRadius: 5,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginLeft: 20,
    paddingVertical: 5,
    paddingHorizontal: 9,
  },
  itemSelected: {
    backgroundColor: colors.primary,
  },
  itemText: {
    color: colors.primary,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemTextSelected: {
    color: colors.white,
  },
});

const KeywordBar = () => {
  const [selects, setSelects] = useState([]);

  const handlePress = keyword => {
    if (selects.indexOf(keyword) < 0) {
      setSelects(selects => [...selects, keyword]);
    } else {
      setSelects(selects => selects.filter(e => e !== keyword));
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {keywords.map((keyword, index) => {
          const isSelected = selects.indexOf(keyword) >= 0;
          return (
            <TouchableOpacity
              key={keyword}
              style={[
                styles.item,
                isSelected && styles.itemSelected,
                index === 0 && { marginLeft: 0 },
              ]}
              onPress={() => handlePress(keyword)}
            >
              <Text
                style={[styles.itemText, isSelected && styles.itemTextSelected]}
              >
                {keyword}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default KeywordBar;
