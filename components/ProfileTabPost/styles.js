const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  profileTabPostContainer: {
    flex: 1,
    paddingTop: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 21,
    justifyContent: 'space-between',
  },
  image: {
    maxWidth: 160,
    maxHeight: 120,
  },
});

export default styles;
