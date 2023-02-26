import React from "react";
import Rating from "@mui/material/Rating";
const Card = () => {
  return (
    <div className="xl:w-[20vw] xl:h-[50vh] bg-field rounded-xl text-primaryText text-10 m-16">
      <img
        src="https://bd.gaadicdn.com/processedimages/oben/oben-electric-bike/640X309/oben-electric-bike62306eca07dd7.jpg"
        className="w-full aspect-video rounded-xl"
      />
     <div className="ml-4"> <div className="line-clamp-2">Model: Super Soco TC MAX</div>
      <div className="flex flex-row">
        <span>Rating :</span> <Rating name="read-only" value={3} readOnly />
      </div>
      <div className="text-8 text-secondaryText xl:mt-8 py-4">
      <div>Battery Capacity: 60V/45Ah Lithium-ion battery</div>
      <div>Motor Power: 5 kW peak power, 3 kW continuous power</div>
      <div>Motor Power: 5 kW peak power, 3 kW continuous power</div>
      <div>Driving Range: Up to 140 km on a single charge</div>
      </div>
      </div>
    </div>
  );
};
export default Card;
