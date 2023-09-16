import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import UserImage from '../UserImage/UserImage';

const UserStory = ({firstName}) => {
  return (
    <View style={styles.storyContainer}>
      <UserImage />
      <Text style={styles.name}>{firstName}</Text>
    </View>
  );
};

export default UserStory;
