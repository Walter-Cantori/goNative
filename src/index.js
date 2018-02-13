import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
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
    minHeight: '90%',
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
    backgroundColor: colors.newPostBtn,
  },
  newPostButton: {
    color: colors.newPostTxt,
    textAlign: 'center',
    lineHeight: 40,
    fontWeight: 'bold',
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainBg,
  },
  inputs: {
    height: 40,
    minWidth: '90%',
    borderColor: colors.borderColor,
    backgroundColor: colors.postBg,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  textArea: {
    height: 100,
    minWidth: '90%',
    borderColor: colors.borderColor,
    backgroundColor: colors.postBg,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
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

  openModal() {
    this.setState({ createPost: true });
  }

  closeModal() {
    this.setState({ createPost: false });
  }

  savePost() {
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
      });
      this.closeModal();
    } else {
      alert('Please Enter all information');
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>

        <Modal
          visible={this.state.createPost}
          animationType="slide"
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View>

              <TextInput
                style={styles.inputs}
                placeholder="Title"
                onChangeText={text => this.setState({ newTitle: text })}
              />
              
              <TextInput
                style={styles.inputs}
                placeholder="Author"
                onChangeText={text => this.setState({ newAuthor: text })} 
              />

              <TextInput
                style={styles.textArea}
                placeholder="Content"
                multiline={true}
                numberOfLines={4}
                onChangeText={text => this.setState({ newBody: text })}
              />

              <Button title="Cancel" onPress={() => this.closeModal()} />
              <Button title="Save" onPress={() => this.savePost()} />
            
            </View>
          </View>
        </Modal>
        
        <View style={styles.headerView}><Text style={styles.header}>GoNative App</Text></View>
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
          { posts.map(post => <Posts key={post.id} post={post} />)}
        </ScrollView>
        
        <TouchableOpacity onPress={() => this.openModal()} style={styles.newPost}>
          <Text style={styles.newPostButton}>NEW</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}
