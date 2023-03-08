import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const DetailsScreen = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      return navigate("/");
    }
  });

  return (
    <div className="w-full">
      <div className="w-full h-[60vh]">
        <img src={state.img} alt={"manoj"} className={"w-full h-full object-contain "} />
      </div>

      <div className="text-primaryText text-12 w-[80vw] mx-auto mt-32">
        <div>Vehicle Name:{state.name}</div>
        <div>Cost:{state.cost}</div>
        <div>MaximumPower:{state.MaximumPower}</div>
        <div>Chargingtime:{state.Chargingtime}</div>
        <div>BatteryCapacity:{state.BatteryCapacity}</div>
        <div>MaximumTorque:{state.MaximumTorque}</div>
        <div>Weight:{state.Weight}</div>

        <div>MileageFullcharge:{state.MileageFullcharge}</div>

        <div>MaximumSpeed:{state.MaximumSpeed}</div>

        <div>BootSpace:{state.BootSpace}</div>
      </div>
    </div>
  );
};
export default DetailsScreen;
