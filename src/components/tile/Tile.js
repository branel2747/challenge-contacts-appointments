import React from "react";

export const Tile = ({obje={}}) => {
  function capitalize(str){
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
  }
  const list = [];
  Object.entries(obje).forEach(([key, value]) => {
    //window.alert(value);
    list.push(<p key={key}>{capitalize(key)}: {value}</p>)
  })
  return (
    <div className="tile-container">
      {
        list
      }
    </div>
  );
};
