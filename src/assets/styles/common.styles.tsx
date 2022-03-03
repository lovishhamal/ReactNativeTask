import {StyleSheet} from 'react-native';
import {colors} from '../../config/app_config';
import {normalize} from '../../utils/utils';

export const commonStyles = StyleSheet.create({
  flex1: {flex: 1},
  header: {
    // for header icons
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(10),
  },
  headerText: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  button: {flexDirection: 'row', alignItems: 'center', color: colors.green},
  textInputStyle: {
    width: '100%',
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: normalize(4),
    padding: normalize(10),
    color: colors.white,
  },
});
