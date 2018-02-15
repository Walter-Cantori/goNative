import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import Posts from 'components/Posts';
import colors from './assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerView: {
    flex: 1,
    backgroundColor: colors.postBg,
    marginTop: 35,
    justifyContent: 'center',
  },
  header: {
    color: colors.headerColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 15,
    backgroundColor: colors.mainBg,
    padding: 20,
    justifyContent: 'center',
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
          author: 'foo',
          title: 'foo`s title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et velit at ex blandit tincidunt. Donec imperdiet odio sodales metus imperdiet pretium. Integer purus ex, finibus eu nisl ac',
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
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et velit at ex blandit tincidunt. Donec imperdiet odio sodales metus imperdiet pretium. Integer purus ex, finibus eu nisl ac',
        },
        {
          id: 6,
          author: 'bar',
          title: 'bars`s title',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et velit at ex blandit tincidunt. Donec imperdiet odio sodales metus imperdiet pretium. Integer purus ex, finibus eu nisl ac',
        },
      ],
    };
  }
  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerView}><Text style={styles.header}>GoNative App</Text></View>
        <View style={styles.scrollContainer}>
          <ScrollView>
            { posts.map(post => <Posts key={post.id} post={post} />)}
          </ScrollView>
        </View>
      </View>
    );
  }
}
