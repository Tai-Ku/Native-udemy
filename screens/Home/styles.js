const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingRight: 26,
    paddingLeft: 17,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 100,
  },
  messageNumberContainer: {
    width: 10,
    height: 10,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 7,
    top: 10,
  },
  messageNumber: {
    fontSize: 6,
    fontFamily: 'Inter',
    lineHeight: 7,
    fontWeight: 600,
    color: '#ffff',
  },
  userStoryContainer: {
    paddingHorizontal: 24,
    marginTop: 12,
    height: 100,
  },
  userPostContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
  },
});
