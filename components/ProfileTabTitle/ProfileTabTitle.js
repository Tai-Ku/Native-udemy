import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ProfileTabTitle = ({title, isFocused}) => {
  return (
    <Text
      style={[
        styles.title,
        {
          color: isFocused ? '#022150' : '#79869F',
          fontWeight: isFocused ? '500' : '400',
        },
      ]}>
      {title}
    </Text>
  );
};

export default ProfileTabTitle;
