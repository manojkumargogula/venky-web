import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Slider from "@mui/material/Slider";
import { Button } from "@mui/material";
const SearchBox = (props) => {
  const { setSortField, value, setFilterData, filterData } = props;
  const handleChanges = (event, newValue, item) => {
    let array = { ...filterData };

    array[item] = newValue;
    setFilterData({ ...array });
  };
  const [filterValue, setFilterValue] = useState("");
  const [filters, setFilters] = useState([]);
  const [sortArray, setSortArray] = useState([
    "Cost",
    "MaximumPower",
    "Chargingtime",
    "BatteryCapacity",
    "MaximumTorque",
    "Weight",
    "MileageFullcharge",
    "MaximumSpeed",
    "BootSpace",
  ]);
  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleReset = () => {
    setSortField(null);
    setFilterData({});
  };

  const handleFIltersAdd = () => {
    setFilters([...filters, filterValue]);
    let index = sortArray.indexOf(filterValue);
    let array = [...sortArray];
    array.splice(index, 1);
    setSortArray([...array]);
  };
  return (
    <div className="w-[60vw]  text-scrollbar-thumb flex items-center justify-center bg-tooltipBackground mx-auto my-32 rounded-xl">
      <div>
        <p className="text-18 text-center font-700 text-linkText">
          Wanna Find Electric Vehicle?
        </p>
        {/* <InputLabel id="demo-simple-select-label">Filter</InputLabel> */}
        <div className="flex flex-row items-center my-8">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterValue}
            label="add Filters"
            onChange={handleChange}
            className="w-[10vw] h-[6vh] mr-6"
          >
            {sortArray.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
          <button
            className="text-bgSidebar mr-20 border-border border-1 rounded-8 p-4 text-12"
            onClick={handleFIltersAdd}
          >
            Add Filter
          </button>

          <div className="flex flex-col">
            {filters.map((item) => {
              return (
                <div className=" w-[20vw] flex flex-row">
                  <div
                    className="w-[10vw] h-[3vh] border-border border-1 rounded-8 flex justify-center my-3"
                    // onClick={() => handleChange(item)}
                  >
                    {item}
                  </div>
                  <Slider
                    aria-label="Volume"
                    value={filterData[item]}
                    defaultValue={0}
                    min={10}
                    max={100}
                    onChange={(event, newValue) =>
                      handleChanges(event, newValue, item)
                    }
                    className="ml-10"
                  />
                </div>
              );
            })}
          </div>
          {/* {sortField && (
           
          )} */}
        </div>
        <div className="flex justify-center">
          <Button onClick={handleReset}>Show All</Button>
        </div>
      </div>
    </div>
  );
};
export default SearchBox;
