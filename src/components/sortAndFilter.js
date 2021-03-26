import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
const screenHeight = Dimensions.get('window').height;
import {SearchRestaurant} from '../components/searchComponent';
import CheckBox from '@react-native-community/checkbox';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const stateList = [
  'Rajasthan',
  'Madhya Pradesh',
  'Maharashtra',
  'Uttar Pradesh',
  'Gujarat',
  'Karnataka',
  'Andhra Pradesh',
  'Odisha',
  'Chhattisgarh',
  'Tamil Nadu',
  'Telangana',
  'Bihar',
  'West Bengal',
  'Arunachal Pradesh',
  'Jharkhand',
  'Assam',
  'Ladakh',
  'Himachal Pradesh',
  'Uttarakhand',
  'Punjab',
  'Haryana',
  'Jammu and Kashmir',
  'Kerala',
  'Meghalaya',
  'Manipur',
  'Mizoram',
  'Nagaland',
  'Tripura',
  'Andaman and Nicobar Islands',
  'Sikkim',
  'Goa',
  'NCT Delhi',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Puducherry',
  'Chandigarh',
  'Lakshadweep',
  'India',
];

export const Filters = props => {

  const [selectedFilter, updateSelectedFilter] = useState('Soty By');
  const [stateSearchList, updateStateSearchList] = useState([]);
  const [selectedStates, updateSelectedStates] = useState([]);



  function searchDish(searchText) {
    var filteredList = stateList.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase()),
    );
    updateStateSearchList(filteredList);
  }




  return (
    <View>
      <View style={{flexDirection: 'row', height: screenHeight - 200}}>
        <View
          style={{
            flex: 0.35,
            borderRightColor: '#E0E0E0',
            borderRightWidth: 1,
          }}>
          <TouchableOpacity
            style={[
              {paddingVertical: 15},
              selectedFilter == 'Soty By'
                ? {borderLeftColor: 'red', borderLeftWidth: 2, paddingLeft: 8}
                : {backgroundColor: '#F0F0F0', paddingLeft: 10},
            ]}
            onPress={() => {
              updateSelectedFilter('Soty By');
            }}>
            <Text>{'Soty By'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {paddingVertical: 15},
              selectedFilter == 'Cuisine'
                ? {borderLeftColor: 'red', borderLeftWidth: 2, paddingLeft: 8}
                : {backgroundColor: '#F0F0F0', paddingLeft: 10},
            ]}
            onPress={() => {
              updateSelectedFilter('Cuisine');
            }}>
            <Text>{'Cuisine'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {paddingVertical: 15},
              selectedFilter == 'More Filter'
                ? {borderLeftColor: 'red', borderLeftWidth: 2, paddingLeft: 8}
                : {backgroundColor: '#F0F0F0', paddingLeft: 10},
            ]}
            onPress={() => {
              updateSelectedFilter('More Filter');
            }}>
            <Text>{'More Filter'}</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.65}}>
          <SearchRestaurant
            searchDish={searchDish.bind(this)}
            componentType={'TextBox'}
            iconName={'search'}
            placholder={'Search hear'}
            // navigation={this.props.navigation}
          />
          <ScrollView>
          {stateSearchList && stateSearchList.length > 0
            ? stateSearchList.map((item, index) => {
                return (
                  <View style={{flexDirection: 'row'}} key={index}>
                    <CheckBox
                      // tintColor={"red"}
                      value={false}
                      onValueChange={() =>{

                        // this.setState({checked: !this.state.checked})
                      }}
                    />
                    <Text style={{marginTop: 5}}> {item}</Text>
                  </View>
                );
              })
            : null}
            </ScrollView>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 60,
          borderTopColor: '#E0E0E0',
          borderTopWidth: 1,
        }}>
        <View
          style={{flex: 0.35, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Text style={{fontSize: 20, color: 'red'}}>{'Clear All'}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flex: 0.65, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              borderRadius: 6,
              backgroundColor: 'pink',
              height: 47,
              width: '90%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20}}>{'Apply'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const SortAndFilter = props => {
  return (
    <KeyboardAwareScrollView>

    <Modal
      style={{justifyContent: 'flex-end', margin: 0}}
      isVisible={true}
      animationIn={'bounceInUp'}>
      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View
          style={{
            borderBottomColor: '#E0E0E0',
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            height: 50,
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 18}}>{'Sort And Filters'}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              props.updateModalFlag(false);
            }}>
            <Text>{'X'}</Text>
          </TouchableOpacity>
        </View>

        <Filters />
      </View>
    </Modal>
</KeyboardAwareScrollView>

    // {/* <Modal
    //           animationType="slide"
    //           transparent={true}
    //           visible={true}
    //           onRequestClose={() => {
    //             // Alert.alert("Modal has been closed.");
    //             // this.se2tModalVisible(!modalVisible);
    //           }}
    //         >
    //             <View style={{height:300,backgroundColor:"white"}}><Text>{"hhh"}</Text></View>
    //         </Modal> */}
  );
};
