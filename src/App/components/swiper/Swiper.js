import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCards, Autoplay } from "swiper";
import { vehicles } from "../../data/data";

const SwiperCarousel = (props) => {
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
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={true}
        effect={"cards"}
        modules={[EffectCards, Autoplay]}
        cardsEffect={{ rotate: false, perSlideOffset: 10 }}
        className="xl:w-[80vw] xl:h-[38vw] rounded-2xl"
      >
        {vehicles.map((vehicle, index) => (
          <SwiperSlide key={index}>
            <img
              src={vehicle?.img}
              alt={vehicle?.alternativeText}
              className={"w-full h-full aspect-video object-cover"}
            />
            <span className="absolute bottom-[5%] left-[5%] text-28 text-primaryText">
              {vehicle.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
