import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import DataCarousel from './DataCarousel'
import Theme from '../Theme/Theme'
import CarouselCardItem,  { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'

const VistaAdd = () => {
  const isCarousel = React.useRef(null)

  return (
    <View style={[Theme.styles.mt50]}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={DataCarousel}
        renderItem={CarouselCardItem}  
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  )
}


export default VistaAdd 