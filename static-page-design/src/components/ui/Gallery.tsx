import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Carousel() {
  return (
    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} infinite>
      <Slider>
        <Slide index={0} className='bg-black'>
          I am the first Slide.
        </Slide>
        <Slide index={1} className='bg-black'>
          I am the second Slide.
        </Slide>
        <Slide index={2} className='bg-black'>
          I am the third Slide.
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}
