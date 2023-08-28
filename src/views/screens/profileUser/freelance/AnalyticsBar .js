import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, fontSizes} from '../../../constants';
import {VictoryChart, VictoryBar, VictoryTheme} from 'victory-native';

const AnalyticsBar = ({
  totalEarnings,
  totalCompletedOrders,
  averageSellingPrice,
}) => {
  const [data, setData] = useState([
    {i: 20, price: 100},
    {i: 40, price: 200},
    {i: 60, price: 100},
    {i: 80, price: 120},
    {i: 100, price: 200},
  ]);
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.label}>Total Earnings</Text>
          <Text style={styles.value}>{totalEarnings}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Total Completed Orders</Text>
          <Text style={styles.value}>{totalCompletedOrders}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Avg. Selling Price</Text>
          <Text style={styles.value}>{averageSellingPrice}</Text>
        </View>
      </View>
      <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>title</Text>
      </View>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'white',
    paddingVertical: 12,
  },
  item: {
    alignItems: 'center',
  },
  label: {
    fontSize: fontSizes.h6,
    color: '#888',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default AnalyticsBar;
