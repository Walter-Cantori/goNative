import React from 'react';
import { Modal, View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import CustomButtom from './CustomButtom';
import colors from '../assets/colors';

const styles = StyleSheet.create({
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

const NewPost = ({ visible, closeModal, savePost, handleInput }) => (
  <Modal
    visible={visible}
    animationType="slide"
    onRequestClose={closeModal}
  >
    <View style={styles.modalContainer}>
      <Text style={styles.formTitle}>Create New Post</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Title"
        onChangeText={text => handleInput(text, 'newTitle')}
      />

      <TextInput
        style={styles.inputs}
        placeholder="Author"
        onChangeText={text => handleInput(text, 'newAuthor')}
      />

      <TextInput
        style={styles.textArea}
        placeholder="Content"
        multiline={true}
        numberOfLines={4}
        onChangeText={text => handleInput(text, 'newBody')}
      />

      <View style={styles.formButtons}>

        <CustomButtom
          onPress={savePost}
          outterStyle={styles.savePostButton}
          innerStyle={styles.savePostTxt}
          text="Save"
        />

        <CustomButtom
          onPress={closeModal}
          outterStyle={styles.cancelPostButton}
          innerStyle={styles.cancelPostTxt}
          text="Cancel"
        />
      </View>

    </View>

  </Modal>
);

NewPost.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  savePost: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default NewPost;
