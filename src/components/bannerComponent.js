import React from 'react';
import {View} from 'react-native' 

import { SliderBox } from "react-native-image-slider-box";

 export const BannerImages = () =>{

    var images=[
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    ]

    return(
        <View>
        <SliderBox images={images} 
        //   ImageComponent={"FastImage"}
        ImageComponentStyle={{borderRadius: 5, width: '95%', marginTop: 5}}

autoplay
        circleLoop
        sliderBoxHeight={180}

        />
        </View>
    )

}