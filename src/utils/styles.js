import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  homePageCategoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  homePageScrollStyles: {
    paddingLeft: 10,
  },
  categoryButtonStyle: {
    borderColor: '#C1C1C1',
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },
  categoryTextStyle: {fontSize: 12},
  categoryFilterButtonStyle:{
    borderColor: '#C1C1C1',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  listofProductStyles:{
    flex: 0.8,
    flexDirection: 'column',
    // borderRadius:6,
    marginHorizontal:10,
    marginBottom:10
},
productImageStyle:{
    justifyContent:'center',
    alignSelf:'center',
    alignContent:'space-between',
    height:70,width:70,
    borderRadius:50
}
});
