/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
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

import {LineChart, Grid} from 'react-native-svg-charts';
import {G} from 'react-native-svg';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const graph_size = 100;
  const array = new Array(graph_size);
  array.fill(0);
  const [data, setData] = useState(array);
  const [position, setPosition] = useState(graph_size);
  useEffect(() => {
    setInterval(() => {
      setPosition(position => {
        if (position % graph_size === 0) {
          setData(data => {
            array.fill(0);
            return array;
          });
          return (position + 1) % graph_size;
        } else {
          setData(data => {
            let arr = data;
            arr[position] = Math.random() * 100;
            return arr;
          });
          return (position + 1) % graph_size;
        }
      });
    }, 10);
  }, []);

  // const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <View>
      <LineChart
        style={{height: 200}}
        data={data}
        svg={{stroke: 'rgb(134, 65, 244)'}}
        contentInset={{top: 20, bottom: 20}}></LineChart>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
