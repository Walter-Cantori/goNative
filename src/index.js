import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Posts from 'components/Posts';
import colors from './assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.mainBg,
    paddingBottom: 20,
  },
  header: {
    color: colors.headerColor,
    textAlign: 'center',
    lineHeight: 50,
    fontWeight: 'bold',
  },
  headerView: {
    backgroundColor: colors.postBg,
    marginTop: 35,
    height: 50,
    width: '100%',
  },
  newPost: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.borderColor,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 80,
    width: 80,
    paddingTop: 20,
    backgroundColor: colors.newPost,
  },
  newPostButton: {
    color: colors.newPostBtn,
    textAlign: 'center',
    lineHeight: 40,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 0,
          author: 'foo',
          title: 'foo`s title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et velit at ex blandit tincidunt. Donec imperdiet odio sodales metus imperdiet pretium. Integer purus ex, finibus eu nisl ac',
        },
        {
          id: 1,
          author: 'bar',
          title: 'bars`s title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 2,
          author: 'bar',
          title: 'bars`s title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et velit at ex blandit tincidunt. Donec imperdiet odio sodales metus imperdiet pretium. Integer purus ex, finibus eu nisl ac',
        },
        {
          id: 3,
          author: 'bar',
          title: 'bars`s title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 4,
          author: 'bar',
          title: 'bars`s title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 5,
          author: 'bar',
          title: 'bars`s title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: 6,
          author: 'bar',
          title: 'bars`s title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    };
  }
  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}><Text style={styles.header}>GoNative App</Text></View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          { posts.map(post => <Posts key={post.id} post={post} />)}
        </ScrollView>
        <TouchableOpacity onPress={() => alert('clicked')} style={styles.newPost}>
          <Text style={styles.newPostButton}>NEW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
