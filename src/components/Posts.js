import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import colors from '../assets/colors';

const styles = StyleSheet.create({
  post: {
    backgroundColor: colors.postBg,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    color: colors.postTitle,
    fontWeight: 'bold',
  },
  authorView: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  authorText: {
    color: colors.postAuthor,
  },
  body: {
    paddingTop: 10,
    color: colors.postBody,
  },
});

const Posts = ({ post }) => {
  const { title, author, body } = post;
  return (
    <View style={styles.post}>
      <Text style={styles.title}>{ title }</Text>
      <View style={styles.authorView}>
        <Text style={styles.authorText}>{ author }</Text>
      </View>
      <Text style={styles.body}>{ body }</Text>
    </View>
  );
};

Posts.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Posts;

