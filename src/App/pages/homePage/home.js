import React, { useState } from "react";
import Header from "../../components/header";
import Swiper from "../../components/swiper/Swiper";
import SearchBox from "../../components/searchBox";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import vehicles from "../../data/data";
import { data } from "../../data/data";
const HomePage = () => {
  const [sortField, setSortField] = useState(null);
  const IdealData = data();
  const [value, setValue] = useState(0);

  const navigate = useNavigate();
  const renderCardsContent = () => {
    if (sortField && value) {
      const result = vehicles.filter((vehicle) => {
        const vehiclepro = (vehicle[sortField] / IdealData[sortField]) * 100;
        if (value >= vehiclepro) return vehicle;
      });
      return (
        <>
         <div className="text-primaryText text-14 font-700 flex justify-center ">
          Best Match
        </div>
        {result.length?
        <div className="grid sm:grid-cols-1 xl:grid-cols-4 mx-auto w-[90vw]">
          {result.map((vehicle) => {
            return (
              <div onClick={() => navigate("/details", { state: vehicle })}>
                <Card vehicle={vehicle} />
              </div>
            );
          })}
        </div>:<div className="h-[30vh] flex w-full justify-center text-primaryText my-20">No vehicles found</div>
    }
        </>
      );
    }
    return (
      <>
        <div className="text-primaryText text-14 font-700 flex justify-center ">
          Trending Machines
        </div>
        <div className="grid sm:grid-cols-1 xl:grid-cols-4 mx-auto w-[90vw]">
          {vehicles.map((vehicle) => {
            return (
              <div onClick={() => navigate("/details", { state: vehicle })}>
                <Card vehicle={vehicle} />
              </div>
            );
          })}
        </div>
      </>
    );
  };

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
      {renderCardsContent()}
      <div className="absolute animate-bounce bottom-10 right-10 bg-cardBorder">
        manoj
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
