import React from "react";
import Rating from "@mui/material/Rating";

const DetailsScreen = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[60vh]">
        <img
          src={
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
          }
          alt={"manoj"}
          className={"w-full h-full "}
        />
      </div>

      <div className="text-primaryText text-12 w-[80vw] mx-auto mt-32">
        <div>Bike Name:</div>
        <div>Bike Manufracturer:</div>
        <div>Bike Model:</div>
        <div>Price:</div>
        <div>
          <span>Rating :</span> <Rating name="read-only" value={3} readOnly />
        </div>
        <div>Description:</div>
      </div>
    </div>
  );
};
export default DetailsScreen;
