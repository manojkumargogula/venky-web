import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Slider from "@mui/material/Slider";
const SearchBox = (props) => {
  const { setValue, setSortField, sortField, value } = props;
  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange = (event) => {
    setSortField(event.target.value);
  };
  const sortArray = [
    "Cost",
    "MaximumPower",
    "Chargingtime",
    "BatteryCapacity",
    "MaximumTorque",
    "Weight",
    "MileageFullcharge",
    "MaximumSpeed",
    "BootSpace",
  ];
  return (
    <div className="w-[60vw] h-[30vh] text-scrollbar-thumb flex items-center justify-center bg-tooltipBackground mx-auto my-32 rounded-xl">
      <div>
        <p className="text-18 text-center font-700 text-linkText">
          Wanna Find Electric Vehicle?
        </p>
        {/* <InputLabel id="demo-simple-select-label">Filter</InputLabel> */}
        <div className="flex flex-row items-center my-8">
          <div className="text-14 text-bgSidebar mr-6">Filter:</div>
          <Select
            value={sortField}
            // label="Filter"
            onChange={handleChange}
            className="mr-20 w-[20vw] h-[5vh]"
          >
            {sortArray.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
          <Slider
            aria-label="Volume"
            value={value}
            defaultValue={0}
            min={10}
            max={100}
            onChange={handleChanges}
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
