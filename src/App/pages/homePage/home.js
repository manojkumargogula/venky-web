import React, { useState } from "react";
import Header from "../../components/header";
import Swiper from "../../components/swiper/Swiper";
import SearchBox from "../../components/searchBox";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
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
      <Outlet />
      <div className="mt-32">
        <Swiper images={images} />
      </div>
      <SearchBox />
      <div className="text-primaryText text-14 font-700 flex justify-center ">
        Trending Machines
      </div>
      <div className="grid sm:grid-cols-1 xl:grid-cols-4 mx-auto w-[90vw]">
        {new Array(10).fill(0).map(() => {
          return <Card />;
        })}
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
