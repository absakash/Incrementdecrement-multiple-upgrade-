import React, { useState } from "react";
import Count from "./Count";

const Counter = ({ OnIncrement, OnDecrement,count  }) => {
 
  return (
    <div className="shadow-2xl rounded-lg p-5 flex h-auto justify-center items-center flex-col  space-y-10 my-10">
      <Count count={count}></Count>
      <div className="flex justify-center gap-5">
        <button
          onClick={OnIncrement}
          className="btn btn-secondary btn-outline"
        >
          Increment{" "}
        </button>
        <button
          onClick={OnDecrement}
          className="btn btn-outline btn-primary"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
