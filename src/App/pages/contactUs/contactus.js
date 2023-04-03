import React, { useState } from "react";

import Header from "../../components/header";

function ContactUs() {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopyClick = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    setCopySuccess("Copied to clipboard!");
    setTimeout(() => {
      setCopySuccess("");
    }, 2000);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center bg-gray-200 text-primaryText">
        <div className="flex flex-col items-center ">
          <img
            src={"http://www.gmrit.org/img/New_Logo_Autonomous.jpg"}
            alt="gmrit"
            className="rounded-8 mt-28"
          />
          <div className="text-24 font-700 mb-28 mt-8">Faculty Guide</div>
          <div className=" flex flex-col justify-center w-[30vw]  px-4 py-8 bg-subChip rounded-lg shadow-lg text-13">
            <h1 className="text-3xl font-bold mb-4 hover:text-secondary">
              {/* {item.name} */}
              Mr. Vasupalli Manoj
            </h1>
            <div className="mb-4 group">
              <h2 className="text-xl font-bold mb-2">Address:</h2>
              <div className="flex flex-row items-center w-full">
                <p
                  className="text-gray-700 hover:text-secondary text-10 w-5/6"
                  onClick={() =>
                    handleCopyClick(
                      " Department of EEE,GMR Institute of Technology, GMR Nagar, Rajam-532127, Vizianagaram Dist"
                    )
                  }
                >
                  Department of EEE,GMR Institute of Technology, GMR Nagar,
                  Rajam-532127, Vizianagaram Dist
                </p>
                <p className="text-8 text-inputText hidden group-hover:block ml-auto">
                  {copySuccess || "click to copy"}
                </p>
              </div>
            </div>
            <div className="mb-4 group">
              <h2 className="text-xl font-bold mb-2">Phone:</h2>
              <div className="flex flex-row items-center w-5/6">
                <p
                  className="text-gray-700 hover:text-secondary"
                  onClick={() => handleCopyClick("+91 9110555294")}
                >
                  {/* +91 {item.phone} */}
                  +91 9110555294
                </p>
                <p className="text-8 text-inputText hidden group-hover:block ml-auto ">
                  {copySuccess || "click to copy"}
                </p>
              </div>
            </div>
            <div className="mb-4 group">
              <h2 className="text-xl font-bold mb-2">Email:</h2>
              <div className="flex flex-row items-center">
                <p
                  className="text-gray-700 hover:text-secondary"
                  onClick={() => handleCopyClick("vmanoj@gmail.com")}
                >
                  {/* {item.email} */}
                  vmanoj@gmail.com
                </p>
                <p className="text-8 text-inputText hidden group-hover:block ml-auto">
                  {copySuccess || "click to copy"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
