import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  name: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 16,
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    color: '#79869F',
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInfo: {
    marginLeft: 10,
  },
  userInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
    marginBottom: 20,
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 16,
  },
  userPostStatus: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  userPostStartButton: {
    marginRight: 27,
    flexDirection: 'row',
  },
  userPostIcon: {
    color: '#79869F',
    marginRight: 3,
  },
  userPostText: {
    color: '#79869F',
  },
});
