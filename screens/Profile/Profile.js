import React from 'react';
import {Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {globalStyles} from '../../assets/styles/mains';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';
import {ProfileTabNavigation} from '../../navigation/MainNavigation';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, {flex: 1}]}>
      <ScrollView>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageContent}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <View style={styles.userNameContainer}>
          <View>
            <Text style={styles.userName}>Emmanuel Robertsen</Text>
          </View>
        </View>
        <View style={styles.profileStatusContainer}>
          <View style={[styles.singleCardContainer, styles.singleCardBorder]}>
            <Text style={styles.singleCardNumber}>45</Text>
            <Text style={styles.singleCardText}>Following</Text>
          </View>
          <View style={[styles.singleCardContainer, styles.singleCardBorder]}>
            <Text style={styles.singleCardNumber}>30M</Text>
            <Text style={styles.singleCardText}>Follower</Text>
          </View>
          <View style={styles.singleCardContainer}>
            <Text style={styles.singleCardNumber}>100</Text>
            <Text style={styles.singleCardText}>Posts</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <View style={{height: '100%', backgroundColor: 'red'}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
