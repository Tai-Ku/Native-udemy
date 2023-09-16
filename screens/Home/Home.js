import * as React from 'react';
import {useState, useEffect, useReducer} from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import Title from '../../components/Title/Title';
import {styles} from './styles';
import {globalStyles} from '../../assets/styles/mains';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'Tony',
      id: 3,
    },
    {
      firstName: 'Olivier',
      id: 4,
    },
    {
      firstName: 'Nata',
      id: 5,
    },
    {
      firstName: 'TaiKu',
      id: 6,
    },
    {
      firstName: 'Sean',
      id: 7,
    },
    {
      firstName: 'Nicolas',
      id: 8,
    },
    {
      firstName: 'Frederic',
      id: 9,
    },
    {
      firstName: 'Olivier',
      id: 10,
    },
    {
      firstName: 'Nata',
      id: 11,
    },
    {
      firstName: 'TaiKu',
      id: 12,
    },
    {
      firstName: 'Sean',
      id: 13,
    },
    {
      firstName: 'Nicolas',
      id: 14,
    },
    {
      firstName: 'Frederic',
      id: 15,
    },
  ];
  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Sukabumi,Phuket',
      likes: 1201,
      comments: 23,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Anna',
      lastName: 'Becker',
      location: 'VietNam,Saigon',
      likes: 189,
      comments: 12,
      bookmarks: 12,
      id: 2,
    },
    {
      firstName: 'Phan',
      lastName: 'David',
      location: 'Duc Pho,Quang ngai',
      likes: 1891,
      comments: 122,
      bookmarks: 120,
      id: 3,
    },
    {
      firstName: 'Hau',
      lastName: 'Pham',
      location: 'CaMau,VietNam',
      likes: 1891,
      comments: 122,
      bookmarks: 120,
      id: 4,
    },
    {
      firstName: 'Phan',
      lastName: 'Huy',
      location: 'QuangNam,VietNam',
      likes: 1891,
      comments: 122,
      bookmarks: 120,
      id: 5,
    },
  ];
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderData, setRenderData] = useState(data.slice(0, pageSize));

  const pageSizePost = 2;
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [renderDataPost, setRenderDataPost] = useState(
    posts.slice(0, pageSize),
  );

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      setScreenData(result.screen);
    });
  }, [screenData]);

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;

    if (startIndex > data.length) {
      return [];
    }
    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }
    console.log(startIndex, renderDataPost.length);
    setPageNumber(pageNumber + 1);
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView style={globalStyles.backgroundWhite}>
      <StatusBar />
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Title title={"Let's Explore"} />
              <Pressable
                style={styles.messageIcon}
                onPress={() => navigation.navigate(Routes.Profile)}>
                <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={20} />
                <View style={styles.messageNumberContainer}>
                  <Text
                    style={[
                      styles.messageNumber,
                      {fontSize: screenData.height / 130},
                    ]}>
                    2
                  </Text>
                </View>
              </Pressable>
            </View>
            <Switch
              value={isOn}
              onValueChange={value => setIsOn(value)}
              style={[
                Platform.OS === 'android' && {
                  transform: [{scaleX: 1.2}, {scaleY: 1.2}],
                },
              ]}
              trackColor={
                Platform.OS === 'android' && {false: 'grey', true: 'red'}
              }
            />
            <View style={styles.userStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setIsLoading(false)}
                keyExtractor={item => item.id.toString()}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    console.log(
                      'loading',
                      pagination(data, pageNumber + 1, pageSize),
                    );
                    setRenderData(prev => [
                      ...prev,
                      ...pagination(data, pageNumber + 1, pageSize),
                    ]);
                    setIsLoading(false);
                  }
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={renderData}
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoading(false)}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!isLoading) {
            setIsLoadingPost(true);
            console.log('loading', pagination(data, pageNumber + 1, pageSize));
            setRenderDataPost(prev => [
              ...prev,
              ...pagination(posts, pageNumber + 1, 2, true),
            ]);
            setIsLoadingPost(false);
          }
        }}
        // showsVerticalScrollIndicator={false}
        data={renderDataPost}
        renderItem={({item}) => (
          <View style={styles.userPostContainer}>
            <UserPost
              firstName={item.firstName}
              lastName={item.lastName}
              likes={item.likes}
              bookmarks={item.bookmarks}
              comments={item.comments}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
