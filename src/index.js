import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

import Posts from 'components/Posts';
import colors from './assets/colors';
import CustomButtom from './components/CustomButtom';

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainBg,
    padding: 20,
  },
  inputs: {
    height: 40,
    width: '100%',
    borderColor: colors.borderColor,
    backgroundColor: colors.postBg,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  textArea: {
    height: 100,
    minWidth: '100%',
    borderColor: colors.borderColor,
    backgroundColor: colors.postBg,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  formTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  formButtons: {
    marginTop: 10,
    flexDirection: 'row',
  },
  savePostButton: {
    flex: 1,
    borderRadius: 5,
    height: 30,
    marginRight: 5,
    backgroundColor: colors.newPostBtn,
  },
  cancelPostButton: {
    flex: 1,
    borderRadius: 5,
    height: 30,
    backgroundColor: colors.newPostBtn,
  },
  savePostTxt: {
    textAlign: 'center',
    lineHeight: 30,
    color: colors.newPostTxt,
    fontWeight: 'bold',
  },
  cancelPostTxt: {
    textAlign: 'center',
    lineHeight: 30,
    color: colors.newPostTxt,
    fontWeight: 'bold',
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
      alert('Please enter information for all fields');
    }
  }

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>

        <Modal
          visible={this.state.createPost}
          animationType="slide"
          onRequestClose={() => this.closeModal}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.formTitle}>Create New Post</Text>
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
            
            <View style={styles.formButtons}>

              <CustomButtom
                onPress={this.savePost}
                outterStyle={styles.savePostButton}
                innerStyle={styles.savePostTxt}
                text="Save"
              />

              <CustomButtom
                onPress={this.closeModal}
                outterStyle={styles.cancelPostButton}
                innerStyle={styles.cancelPostTxt}
                text="Cancel"
              />
            </View>

          </View>

        </Modal>
        
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
