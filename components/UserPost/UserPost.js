import {
  faComment,
  faHeart,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Image} from 'react-native';
import {styles} from './styles';

const UserImage = ({
  firstName,
  lastName,
  likes,
  bookmarks,
  comments,
  location,
}) => {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Image source={require('../../assets/images/default_profile.png')} />
          <View style={styles.userPostInfo}>
            <Text style={styles.name}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={styles.location}>{location}</Text>}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={22} />
        </Pressable>
      </View>

      <View style={styles.post}>
        <Image
          resizeMode="cover"
          source={require('../../assets/images/default_post.png')}
        />
      </View>

      <View style={styles.userPostStatus}>
        <Pressable style={styles.userPostStartButton}>
          <FontAwesomeIcon icon={faHeart} style={styles.userPostIcon} />
          <Text style={styles.userPostText}>{likes}</Text>
        </Pressable>
        <Pressable style={styles.userPostStartButton}>
          <FontAwesomeIcon icon={faComment} style={styles.userPostIcon} />
          <Text style={styles.userPostText}>{comments}</Text>
        </Pressable>
        <Pressable style={styles.userPostStartButton}>
          <FontAwesomeIcon icon={faBookmark} style={styles.userPostIcon} />
          <Text style={styles.userPostText}>{bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UserImage;
