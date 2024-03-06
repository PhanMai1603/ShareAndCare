import { StatusBar } from 'expo-status-bar';

import React, { useEffect } from 'react';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import * as styles from './styles';
import SearchButton from './SearchButton';
import NotificationButton from './NotificationButton';
import MoreButton from './MoreButton';
import HomeButton from './HomeButton';

import ShirtCategory from './Categories/ShirtCategory';
import TshirtCategory from './Categories/TshirtCategory';
import JacketCategory from './Categories/JacketCategory';
import BlouseCategory from './Categories/BlouseCategory';
import DressCategory from './Categories/DressCategory';
import ShortsCategory from './Categories/ShortsCategory';
import PantsCategory from './Categories/PantsCategory';
import SkirtCategory from './Categories/SkirtCategory';
import SweaterCategory from './Categories/SweaterCategory';
import JeansCategory from './Categories/JeansCategory';

import FilterAcquisition from './Acquisition/FilterAcquisition';
import DistanceAcquisition from './Acquisition/DistanceAcquisition';
import FreeAcquisition from './Acquisition/FreeAcquisition';
import BuyAcquisition from './Acquisition/BuyAcquisition';
import BorrowAcquisition from './Acquisition/BorrowAcquisition';
import RentAcquisition from './Acquisition/RentAcquisition';

export default function App() {
  // Xử lí hành động Acquisition
  const handleAcquisitionPress = () => {
    console.log('Acquisition pressed!');
  };

  // Lấy kích thước màn hình
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          source={require('./assets/images/logo.png')}
          style={{ width: 248, height: 47, position: 'absolute', top: 50 }}
        />

        <SearchButton onPress={handleAcquisitionPress} />
        <NotificationButton onPress={handleAcquisitionPress} />
        <MoreButton onPress={handleAcquisitionPress} />
      </View>

      <View style={styles.categoriesStyles.view}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <ShirtCategory onPress={handleAcquisitionPress} />
          <TshirtCategory onPress={handleAcquisitionPress} />
          <JacketCategory onPress={handleAcquisitionPress} />
          <BlouseCategory onPress={handleAcquisitionPress} />
          <DressCategory onPress={handleAcquisitionPress} />
          <ShortsCategory onPress={handleAcquisitionPress} />
          <PantsCategory onPress={handleAcquisitionPress} />
          <SkirtCategory onPress={handleAcquisitionPress} />
          <SweaterCategory onPress={handleAcquisitionPress} />
          <JeansCategory onPress={handleAcquisitionPress} />
        </ScrollView>
      </View>

      <View style={styles.acquisitionStyles.view}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <FilterAcquisition onPress={handleAcquisitionPress} />
          <DistanceAcquisition onPress={handleAcquisitionPress} />
          <FreeAcquisition onPress={handleAcquisitionPress} />
          <BuyAcquisition onPress={handleAcquisitionPress} />
          <BorrowAcquisition onPress={handleAcquisitionPress} />
          <RentAcquisition onPress={handleAcquisitionPress} />
        </ScrollView>
      </View>


    </View>
  );
}
