import React, {Component, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {ShowTopLocation} from '../components/topLocationComponent';

import SearchIcon from 'react-native-vector-icons/Feather';
import BackArrow from 'react-native-vector-icons/Feather';

export const SearchRestaurant = props => {
  const [searchText, updateSearchTest] = useState('');

  if (props.componentType == 'Button') {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          paddingVertical: 5,

          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.6,
          shadowRadius: 3,
          elevation: 5,
          alignItems: 'center',

          // marginVertical: 5,
          marginVertical: 10,
        }}
        onPress={() => {
          props.navigation.navigate('SearchScreen');
        }}>
        <SearchIcon
          name={props.iconName}
          size={16}
          color="red"
          style={{marginHorizontal: 10}}
        />
        <Text style={{color: '#C1C1C1', fontSize: 16, fontWeight: '500'}}>
          {'Restaurant name, cuisine or a dish'}
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={{
          height: 43,
          flexDirection: 'row',
          paddingVertical: 5,

          backgroundColor: '#FFFFFF',
          borderRadius: 8,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.6,
          shadowRadius: 3,
          elevation: 5,
          alignItems: 'center',

          // marginVertical: 5,
          marginVertical: 10,
          marginHorizontal: 10,
        }}
        // onPress={() => {
        //   props.navigation.navigate('SearchScreen');
        // }}
      >
        <TouchableOpacity
          onPress={() => {
            if (props.iconName == 'search') {
            } else {
              props.navigation.navigate('Home');
            }
          }}>
          <BackArrow
            name={props.iconName}
            size={props.iconName == 'search' ? 18 : 27}
            color="red"
            style={{marginHorizontal: 5}}
          />
        </TouchableOpacity>
        <TextInput
          value={searchText}
          onChangeText={test => {
            props.searchDish(test);
            updateSearchTest(test);
          }}
          style={{paddingVertical: 4}}
          placeholder={
            props.placholder
              ? props.placholder
              : 'Restaurant name, cuisine or a dish'
          }
        />
        {/* <Text style={{color: '#C1C1C1', fontSize: 16, fontWeight: '500'}}>
          {'Restaurant name, cuisine or a dish'}
        </Text> */}
      </View>
    );
  }
};
