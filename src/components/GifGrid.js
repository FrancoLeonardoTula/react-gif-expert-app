import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loanding } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fedeIn"> {category} </h3>
      {loanding && <p className="animate__animated animate__flash">loanding</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
