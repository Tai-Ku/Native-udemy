import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  profileImageContent: {
    borderWidth: 1,
    padding: 3,
    borderRadius: 100,
  },
  profileImage: {
    height: 120,
    width: 120,
  },
  userName: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#022150',
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileStatusContainer: {
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  singleCardContainer: {
    paddingHorizontal: 18,
    alignItems: 'center',
    marginTop: 16,
  },
  singleCardBorder: {
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    paddingRight: 24,
  },
  singleCardNumber: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    color: '#022150',
  },
  singleCardText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#79869F',
  },
  border: {
    borderTopWidth: 1,
    borderBlockColor: '#EFF2F6',
    marginVertical: 16,
    marginHorizontal: 28,
  },
});
