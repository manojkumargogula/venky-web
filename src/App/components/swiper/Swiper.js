import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards, Autoplay } from "swiper";

const SwiperCarousel = (props) => {
  const { images } = props;
  const [swiperInstance, setSwiperInstance] = useState(null);

  const moveSlideForward = () => {
    swiperInstance.slideNext();
  };

  const moveSlideBackward = () => {
    swiperInstance.slidePrev();
  };
  return (
    <div className="flex flex-row items-center">
      <Swiper
        onInit={(swiper) => {
          setSwiperInstance(swiper);
        }}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"cards"}
        modules={[EffectCards, Autoplay]}
        cardsEffect={{ rotate: false, perSlideOffset: 10 }}
        className="w-[80vw] h-[38vw] rounded-2xl"
      >
        {images.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo.url}
              alt={photo.alternativeText}
              className={"w-screen object-cover"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
