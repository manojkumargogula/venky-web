import React, { useState } from "react";
import Header from "../../components/header";
import Swiper from "../../components/swiper/Swiper";
import SearchBox from "../../components/searchBox";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { vehicles } from "../../data/data";
import { data } from "../../data/data";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";
const HomePage = () => {
  const [sortField, setSortField] = useState(null);
  const IdealData = data();
  const [value, setValue] = useState(1);
  const [filterData, setFilterData] = useState({});

  const navigate = useNavigate();
  const renderCardsContent = () => {
    if (filterData) {
      const filterValues = Object.keys(filterData);
      const result = vehicles.filter((vehicle) => {
        let showVehicle = true;
        filterValues.map((item) => {
          const vehiclepro = (vehicle[item] / IdealData[item]) * 100;
          if (filterData[item] <= vehiclepro) showVehicle = false;
        });
        if (showVehicle) return vehicle;
      });
      return (
        <>
          <div className="text-primaryText text-14 font-700 flex justify-center ">
            Best Match
          </div>
          {result.length ? (
            <div className="grid sm:grid-cols-1 xl:grid-cols-4 mx-auto w-[90vw]">
              {result.map((vehicle) => {
                return (
                  <div onClick={() => navigate("/details", { state: vehicle })}>
                    <Card vehicle={vehicle} />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="h-[30vh] flex w-full justify-center text-primaryText my-20">
              No vehicles found
            </div>
          )}
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
        filterData={filterData}
        setFilterData={setFilterData}
      />
      {renderCardsContent()}
      <div>
        <FloatingWhatsApp
          phone={"7032930354"}
          zIndex={999}
          size={50}
          showOnIE={false}
        />
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
