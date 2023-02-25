import React, { useState } from "react";
import TextField from '@mui/material/TextField';
const SearchBox = () => {
  const [search, setSearch] = useState();
  const saveText = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="w-[60vw] h-[30vh] text-scrollbar-thumb flex items-center justify-center bg-tooltipBackground mx-auto my-32 rounded-xl">
      <div>
        <p className="text-18 text-center font-700 text-linkText">Wanna find Electric Vehicle?</p>
        <TextField id="outlined-basic" label="Ex @Hero Electric" variant="outlined" className="w-[30vw] h-[8vh] rounded-xl" onChange={saveText}/>
      </div>
    </div>
  );
};
export default SearchBox;
