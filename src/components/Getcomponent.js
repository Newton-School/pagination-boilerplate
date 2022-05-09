import React from "react";

export default function Getcomponent(props) {
  const starIndex = props.startIndex;
  const a = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15];
  const arr = [1,2,3];
  //set arr array accordingly 
  // hint use loop
  return (
    <>
      {arr.map((o) => {
        return (
          <>
            <div>{o}</div>
          </>
        );
      })}
    </>
  );
}
