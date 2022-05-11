import React, { useState } from "react";
// import Topbar from './Topbar'
import Buttoncomponent from "./Buttoncomponent";
import Getcomponent from "./Getcomponent";

export default function Home() {
  const arr = [1, 2, 3, 4, 5];
  const [Index, setIndex] = useState(0);
  const [dataElementPerPage, setDataElementPerPage] = useState(0);
  const applyPagination = (o) => {
    // logic for setIndex or starting index of page
    // setIndex here
  };

  const handleSelect = (e) => {
    // setDataElementPerPage here
  };

  return (
    <>
      <div>
        <select data-testid="d" onChange={handleSelect}>
          <option value="s">select</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>

        <Getcomponent
          
        />
      </div>
      <Buttoncomponent applyPagination={applyPagination} />
    </>
  );
}
