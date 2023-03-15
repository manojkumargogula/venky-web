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
    <div className="w-full flex flex-col items-center ">
      <div className="text-18 text-primaryText font-bold">{state.name}</div>
      <div className=" flex flex-col w-full h-[60vh] my-28 rounded-full">
        <img
          src={state.img}
          alt={"manoj"}
          className={"w-full h-full object-contain "}
        />
      </div>

      <ul className="text-primaryText text-12 w-[80vw] mx-auto mt-32 list-disc">
        <li>Vehicle Name:{state.name}</li>
        <li>Cost:{state.Cost} lakhs</li>
        <li>MaximumPower:{state.MaximumPower} bhp</li>
        <li>Chargingtime:{state.Chargingtime} min</li>
        <li>BatteryCapacity:{state.BatteryCapacity} KWh</li>
        <li>MaximumTorque:{state.MaximumTorque} nm/rpm</li>
        <li>Weight:{state.Weight} kgs</li>

        <li>MileageFullcharge:{state.MileageFullcharge} km</li>

        <li>MaximumSpeed:{state.MaximumSpeed} km/hr</li>

        <li>BootSpace:{state.BootSpace} Litres</li>
      </ul>
    </div>
  );
};
export default DetailsScreen;
