"use client"
import React from "react";
import {FidgetSpinner} from "react-loader-spinner";
function loading() {
  return (
    <div className=" h-screen w-screen flex  justify-center items-center">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{backgroundColor:'#D98553'}}
        wrapperClass="fidget-spinner-wrapper"
      />
    </div>
  );
}

export default loading;
