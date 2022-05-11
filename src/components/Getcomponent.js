import React from "react";

export default function Getcomponent(props ) {
  const dataElementPerPage=props.dataElementPerPage
  
  
  var a=[];
  for(var i=0; i<5*dataElementPerPage; i++)a.push(i);
  const arr = [];
  
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
