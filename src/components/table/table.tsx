import React from 'react';
import {ScrollView, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {tableStyles as ts} from '../../assets/styles/component/common';
import {colors} from '../../config/app_config';
import {Customtext, Divider} from '../common';
import {Filter} from './filter';

export const TableComponent = ({data, head}: {data: any; head: any}) => {
  return (
    <View style={ts.container}>
      <Filter />
      <Divider />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={ts.head}>
            {Object.entries(head ?? {}).map((item: any) => (
              <Customtext
                text={item[0]}
                color={colors.black}
                style={ts.headText}
              />
            ))}
          </ScrollView>
        )}
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={ts.body}>
              <View style={ts.bodyContainer}>
                {Object.values(item ?? []).map((item1: any) => (
                  <Customtext
                    text={item1}
                    color={colors.black}
                    style={ts.bodyText}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        )}
      />
    </View>
  );
};
