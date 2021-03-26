import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image
} from 'react-native';
import {ShowTopLocation} from '../components/topLocationComponent';
import {SortAndFilter} from '../components/sortAndFilter';
import {SearchRestaurant} from '../components/searchComponent';
import Styles from '../utils/styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {BannerImages} from '../components/bannerComponent'
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterModalFlag: false,
    };
  }

  selectedCategory(item) {
    if (item.value == 'cuisines') {
      this.setState({
        filterModalFlag: true,
      });
    }
  }
  updateModalFlag(flag) {
    this.setState({
      filterModalFlag: flag,
    });
  }
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={{marginHorizontal: 10}}>
          <ShowTopLocation />
          <SearchRestaurant
          iconName={"search"}
            componentType={'Button'}
            navigation={this.props.navigation}
          />
        </View>
        <View>
          <Categorys selectedCategory={this.selectedCategory.bind(this)} />
        </View>
        <View>
          <BannerImages/>
        </View>
        <View>
          <FoodList/>
        </View>
        {this.state.filterModalFlag ? (
          <SortAndFilter updateModalFlag={this.updateModalFlag.bind(this)} />
        ) : null}
      </KeyboardAwareScrollView>
    );
  }
}

export const Categorys = props => {
  const categorysList = [
    {label: 'Cuisines', value: 'cuisines'},
    {label: 'Rating: 4.0+', value: 'rating'},
    {label: 'Faster Delivery', value: 'Faster Delivery'},
    {label: 'Offers', value: 'offers'},
    {label: 'Takeaway', value: 'Takeaway'},

    {label: 'Faster Delivery', value: 'Faster Delivery'},
    {label: 'Offers', value: 'offers'},
    {label: 'Takeaway', value: 'Takeaway'},
  ];

  return (
    <View style={Styles.homePageCategoryView}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={Styles.homePageScrollStyles}>
        <View style={{flexDirection: 'row'}}>
          {categorysList.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.selectedCategory(item);
                }}
                key={index}
                style={Styles.categoryButtonStyle}>
                <Text style={Styles.categoryTextStyle}>{item.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <TouchableOpacity style={Styles.categoryFilterButtonStyle}>
        <Text style={Styles.categoryTextStyle}>{'Filter'}</Text>
      </TouchableOpacity>
    </View>
  );
};


export const FoodList = (props) =>{

  var productList = [
    {
        "productImage": "https://www.vhv.rs/dpng/d/437-4373805_skinny-slow-cooker-food-plate-top-view-png.png",
        "productName": "Chicken",
    },
    {
        "productImage": "https://www.vhv.rs/dpng/d/492-4924283_plate-with-food-png-top-view-food-png.png",
        "productName": "Bread",
    },
    {
        "productImage": "https://www.vhv.rs/dpng/d/149-1495622_food-on-a-white-plate-hd-png-download.png",
        "productName": "laptop",
    },
    {
        "productImage": "https://www.vhv.rs/dpng/d/515-5154635_transparent-food-plate-png-eat-well-plate-transparent.png",
        "productName": "laptop",
    },
    {
        "productImage": "https://www.vhv.rs/dpng/d/8-86996_plate-of-food-transparent-background-hd-png-download.png",
        "productName": "laptop",
    },
    {
        "productImage": "https://www.vhv.rs/dpng/d/587-5876751_plate-of-food-png-transparent-png.png",
        "productName": "laptop",
    },
    {
        "productImage": "https://www.vhv.rs/dpng/d/573-5733668_bbq-food-plates-png-l-l-hawaiian-transparent.png",
        "productName": "laptop",
    },
    {
        "productImage": "https://www.vhv.rs/dpng/d/125-1253146_bbq-food-plates-png-hawaiian-bbq-plates-transparent.png",
        "productName": "laptopm laptop laptop",
    },

    {
      "productImage": "https://www.vhv.rs/dpng/d/437-4373805_skinny-slow-cooker-food-plate-top-view-png.png",
      "productName": "Chicken",
  },
  {
      "productImage": "https://www.vhv.rs/dpng/d/492-4924283_plate-with-food-png-top-view-food-png.png",
      "productName": "Bread",
  },
  {
      "productImage": "https://www.vhv.rs/dpng/d/149-1495622_food-on-a-white-plate-hd-png-download.png",
      "productName": "laptop",
  },
  {
      "productImage": "https://www.vhv.rs/dpng/d/515-5154635_transparent-food-plate-png-eat-well-plate-transparent.png",
      "productName": "laptop",
  },
  {
      "productImage": "https://www.vhv.rs/dpng/d/8-86996_plate-of-food-transparent-background-hd-png-download.png",
      "productName": "laptop",
  },
  {
      "productImage": "https://www.vhv.rs/dpng/d/587-5876751_plate-of-food-png-transparent-png.png",
      "productName": "laptop",
  },
  {
      "productImage": "https://www.vhv.rs/dpng/d/573-5733668_bbq-food-plates-png-l-l-hawaiian-transparent.png",
      "productName": "laptop",
  },
  {
      "productImage": "https://www.vhv.rs/dpng/d/125-1253146_bbq-food-plates-png-hawaiian-bbq-plates-transparent.png",
      "productName": "laptopm laptop laptop",
  },


]

  return(
    <View>
      <View style={{ marginTop: 10 }}>
          <Text style={{fontSize:17,fontWeight:"bold",marginHorizontal: 10,marginVertical:7}}>{"Eat what makes you happy"}</Text>
            <FlatList
                data={productList}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[Styles.listofProductStyles]}>
                        <View style={{ paddingVertical: 10, borderRadius: 6, }}>
                            <Image source={{ uri: item.productImage }} style={Styles.productImageStyle} />
                        </View>
                        <Text numberOfLines={2} style={{ textAlign: 'center' }}>{item.productName}</Text>
                    </TouchableOpacity>
                )}
                //Setting the number of column
                numColumns={4}
                keyExtractor={(item, index) => index}
            />
        </View>
    </View>
  )
}