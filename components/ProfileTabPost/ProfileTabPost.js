import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {Image} from 'react-native';

const ProfileTabPost = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.profileTabPostContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabPost;
