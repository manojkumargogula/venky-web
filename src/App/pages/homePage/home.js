import React, { useState } from "react";
import Header from "../../components/header";
import Swiper from "../../components/swiper/Swiper";
import SearchBox from "../../components/searchBox";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import vehicles from "../../data/data";

const HomePage = () => {

  const [sortField, setSortField] = useState(null);

  const [value, setValue] = useState();

  return (
    <div className="bg-background-default">
      <Header />
      <Outlet />
      <div className="mt-32">
        <Swiper />
      </div>
      <SearchBox
        setSortField={setSortField}
        setValue={setValue}
        value={value}
        sortField={sortField}
      />
      <div className="text-primaryText text-14 font-700 flex justify-center ">
        Trending Machines
      </div>
      <div className="grid sm:grid-cols-1 xl:grid-cols-4 mx-auto w-[90vw]">
        {vehicles.map((vehicle) => {
          return <Card vehicle={vehicle} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
