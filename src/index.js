import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from 'react-native';

import Posts from 'components/Posts';
import colors from './assets/colors';
import CustomButtom from './components/CustomButtom';
import NewPost from './components/NewPost';

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
    flex: 10,
    backgroundColor: colors.mainBg,
    padding: 20,
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
    backgroundColor: colors.newPostBtn,
  },
  newPostButton: {
    color: colors.newPostTxt,
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
      createPost: false,
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
      ],
    };
  }

  handleInput = (text, field) => {
    this.setState({
      [field]: text,
    });
  }

  openModal = () => {
    this.setState({ createPost: true });
  }

  closeModal = () => {
    this.setState({ createPost: false });
  }

  savePost = () => {
    const lastPost = this.state.posts.length;
    const id = this.state.posts[lastPost - 1].id + 1;

    if (this.state.newTitle && this.state.newAuthor && this.state.newBody) {
      this.setState({
        posts: [...this.state.posts, {
          id,
          title: this.state.newTitle,
          author: this.state.newAuthor,
          body: this.state.newBody,
        }],
        newTitle: null,
        newAuthor: null,
        newBody: null,
      });
      this.closeModal();
    } else {
      Alert.alert('Please enter information for all fields');
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>

        <NewPost
          visible={this.state.createPost}
          closeModal={this.closeModal}
          handleInput={this.handleInput}
          savePost={this.savePost}
        />
        
        <View style={styles.headerView}><Text style={styles.header}>GoNative App</Text></View>
        
        <View style={styles.scrollContainer}>
          <ScrollView>
            { posts.map(post => <Posts key={post.id} post={post} />)}
          </ScrollView>
        </View>

        <CustomButtom
          onPress={this.openModal}
          outterStyle={styles.newPost}
          innerStyle={styles.newPostButton}
          text="NEW"
        />
      
      </View>
    );
  }
}
