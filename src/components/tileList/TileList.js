import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({Array = []}) => {
  return (
    <div className="tilelist">

      {
        Array.map((item,index)=>
        <Tile obje={item} key={index}/>
        )
      }
      
    </div>
  );
};
