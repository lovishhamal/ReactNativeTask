import {StyleSheet} from 'react-native';
import {colors} from '../../config/app_config';
import {normalize} from '../../utils/utils';

export const mainStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.primaryBlack,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: normalize(20),
    backgroundColor: colors.primaryBlack,
  },
  body: {
    backgroundColor: colors.primaryColor,
    width: '100%',
    padding: normalize(20),
    borderRadius: 4,
  },
  title: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    color: colors.white,
  },
  buttonContainer: {alignItems: 'center'},
  button: {
    backgroundColor: colors.white,
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(50),
    borderRadius: normalize(4),
  },
  table: {alignSelf: 'center', marginTop: normalize(20)},
});
