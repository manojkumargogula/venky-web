import React, { useState } from "react";
import Header from "../components/header";
import Swiper from "../components/swiper/Swiper";
import SearchBox from "../components/searchBox";
import Card from "../components/Card";

const HomePage = () => {
  const images = [
    {
      url: "https://bd.gaadicdn.com/processedimages/oben/oben-electric-bike/640X309/oben-electric-bike62306eca07dd7.jpg",
      alternativeText: "Sweden Photo One",
    },
    {
      url: "https://bd.gaadicdn.com/processedimages/oben/oben-electric-bike/640X309/oben-electric-bike62306eca07dd7.jpg",
      alternativeText: "Sweden Photo Two",
    },
    {
      url: "https://bd.gaadicdn.com/processedimages/oben/oben-electric-bike/640X309/oben-electric-bike62306eca07dd7.jpg",
      alternativeText: "Sweden Photo Three",
    },
  ];
  return (
    <div className="bg-background-default">
      <Header />
      <div className="mt-32">
        <Swiper images={images} />
      </div>
      <SearchBox />
      <div className="grid grid-cols-4 mx-auto w-[90vw]">
      {new Array(10).fill(0).map(() => {
       return <Card />;
      })}
      </div>
    </div>
  );
};
export default HomePage;
