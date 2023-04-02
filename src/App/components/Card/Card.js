import React from "react";
import Rating from "@mui/material/Rating";
const Card = (props) => {
  const { vehicle } = props;
  return (
    <div className="xl:w-[20vw] xl:h-[55vh] bg-field rounded-xl text-primaryText text-10 m-16 pb-14">
      <img src={vehicle.img} className="w-full aspect-video rounded-xl" />
      <div className="ml-4">
        <div className="line-clamp-2">Model: {vehicle.name}</div>
        <div className="flex flex-row">
          {/* <span>Rating :</span> <Rating name="read-only" value={3} readOnly /> */}
          <div>Cost:{vehicle.Cost} lakhs</div>
        </div>
        <div className="text-8 text-secondaryText  py-4">
          <div>MaximumPower: {vehicle.MaximumPower} bhp</div>
          <div>Chargingtime:{vehicle.Chargingtime} min</div>
          <div>BatteryCapacity:{vehicle.BatteryCapacity} KWh</div>
          <div>MaximumTorque: {vehicle.MaximumTorque} nm/rpm</div>
          <div>Weight:{vehicle.Weight} kgs</div>
          <div>MileageFullcharge:{vehicle.MileageFullcharge} km</div>

          <div>MaximumSpeed:{vehicle.MaximumSpeed} km/hr</div>
          <div>BootSpace:{vehicle.BootSpace} Litres</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
