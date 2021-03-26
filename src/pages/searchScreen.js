import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {ShowTopLocation} from '../components/topLocationComponent';

import SearchIcon from 'react-native-vector-icons/Feather';
import {SearchRestaurant} from '../components/searchComponent';
const screenHeight = Dimensions.get('window').height
const searchValues = [
  {
    dishName: 'Dhosa',
    place: 'coimbatore',
    status: 'not available',
    image:
      'https://www.pikpng.com/pngl/m/564-5648682_south-indian-special-kal-dosa-set-dosa-images.png',
  },
  {
    dishName: 'Idly',
    place: 'ooty',
    status: 'available',
    image:
      'https://icon2.cleanpng.com/20180331/lbq/kisspng-rava-idli-dosa-indian-cuisine-sambar-indian-food-5abf14f33cbfa2.0210795715224721792488.jpg',
  },
  {
    dishName: 'Grill',
    place: 'ooty',
    status: 'available',
    image:
      'https://www.spendwithpennies.com/wp-content/uploads/2019/06/Grilled-BBQ-Chicken-SpendWithePennies-4.jpg',
  },
  {
    dishName: 'Fried chicken',
    place: 'ooty',
    status: 'available',
    image:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg',
  },
  {
    dishName: 'Dhosa',
    place: 'coimbatore',
    status: 'not available',
    image:
      'https://www.pikpng.com/pngl/m/564-5648682_south-indian-special-kal-dosa-set-dosa-images.png',
  },
  {
    dishName: 'Idly',
    place: 'ooty',
    status: 'available',
    image:
      'https://icon2.cleanpng.com/20180331/lbq/kisspng-rava-idli-dosa-indian-cuisine-sambar-indian-food-5abf14f33cbfa2.0210795715224721792488.jpg',
  },
  {
    dishName: 'Grill',
    place: 'ooty',
    status: 'available',
    image:
      'https://www.spendwithpennies.com/wp-content/uploads/2019/06/Grilled-BBQ-Chicken-SpendWithePennies-4.jpg',
  },
  {
    dishName: 'Fried chicken',
    place: 'ooty',
    status: 'available',
    image:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg',
  },
  {
    dishName: 'Dhosa',
    place: 'coimbatore',
    status: 'not available',
    image:
      'https://www.pikpng.com/pngl/m/564-5648682_south-indian-special-kal-dosa-set-dosa-images.png',
  },
  {
    dishName: 'Idly',
    place: 'ooty',
    status: 'available',
    image:
      'https://icon2.cleanpng.com/20180331/lbq/kisspng-rava-idli-dosa-indian-cuisine-sambar-indian-food-5abf14f33cbfa2.0210795715224721792488.jpg',
  },
  {
    dishName: 'Grill',
    place: 'ooty',
    status: 'available',
    image:
      'https://www.spendwithpennies.com/wp-content/uploads/2019/06/Grilled-BBQ-Chicken-SpendWithePennies-4.jpg',
  },
  {
    dishName: 'Fried chicken',
    place: 'ooty',
    status: 'available',
    image:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg',
  },
];

export class SearchScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            searchDishList:[]
        }
    }

  searchList(item, index) {
    return (
      <TouchableOpacity
        key={index}
        style={{flexDirection: 'row', marginVertical: 8, alignItems: 'center'}}>
        <View>
          <Image
            source={{uri: item.image}}
            style={{
              height: 50,
              width: 50,
              borderRadius: 6,
              marginHorizontal: 10,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            {item.dishName}
          </Text>
          <Text style={{fontSize: 13, color: '#AAAAAA', fontWeight: '500'}}>
            {item.place}
          </Text>
          {item.status == 'available' ? null : (
            <Text style={{fontSize: 13, color: 'red'}}>
              {'Currently not available for delivery'}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }

  searchDish(searchText){

    var  filteredList = searchValues.filter(item => item.dishName.toLowerCase().includes(searchText.toLowerCase()));

    this.setState({
        searchDishList : filteredList.length > 0 ? filteredList :[]
    })

  }

  render() {
      var {searchDishList} = this.state;
    return (
      <View style={{}}>
        <SearchRestaurant
            searchDish={this.searchDish.bind(this)}
          componentType={'TextBox'}
          iconName={"chevron-left"}
          navigation={this.props.navigation}
        />

        <ScrollView
        style={{height:screenHeight-53}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View>
            {searchDishList && searchDishList.length > 0 ? (
              searchDishList.map((item, index) => {
                return this.searchList(item, index);
              })
            ) : (
              <View style={{marginHorizontal:40}} >
                <Text style={{fontWeight:"bold",fontSize:18,textAlign:"center"}}>{'Oops'}</Text>
                <Text style={{textAlign:"center"}}>
                  {
                    'We could not ubderstand what you mean, try rephrasing the query.'
                  }
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
