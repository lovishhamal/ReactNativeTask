import {StyleSheet} from 'react-native';
import {colors} from '../../../../../config/app_config';
import {normalize} from '../../../../../utils/utils';

export const tableStyles = StyleSheet.create({
  container: {flex: 1, padding: normalize(10), backgroundColor: colors.white},
  head: {backgroundColor: colors.fadeBlack},
  headText: {
    marginRight: normalize(45),
    textTransform: 'capitalize',
    padding: normalize(10),
  },
  body: {
    flexDirection: 'column',
  },
  bodyText: {
    width: normalize(100),
    flexWrap: 'wrap',
    padding: normalize(10),
    backgroundColor: colors.fadeLight,
  },
  bodyContainer: {flexDirection: 'row', marginVertical: normalize(5)},
});
