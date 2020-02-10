import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const PageContentContainer = props => (
  <View style={[styles.container, props.style]}>{props.children}</View>
);

PageContentContainer.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default PageContentContainer;
