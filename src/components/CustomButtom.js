import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const CustomButton = ({ onPress, outterStyle, innerStyle, text }) => (
  <TouchableOpacity onPress={onPress} style={outterStyle}>
    <Text style={innerStyle}>{text}</Text>
  </TouchableOpacity>
);

CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  outterStyle: PropTypes.any.isRequired,
  innerStyle: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomButton;
